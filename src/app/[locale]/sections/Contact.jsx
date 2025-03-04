"use client";
import Button from "@/components/Button";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import formatLineBreak from "@/utils/formatLineBreak";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { useInView, animate, motion } from "framer-motion";

export default function Contact() {
  const t = useTranslations("HomePage.Contact");
  const [disabled, setDisabled] = useState(false);
  const container = useRef(null);
  const isInView = useInView(container, { once: true, amount: 0.55 });

  const yupSchema = yup.object().shape({
    name: yup
      .string()
      .max(40, t("NameInput.Error"))
      .required(t("NameInput.ErrorRequired")),
    email: yup
      .string()
      .required(t("EmailInput.ErrorRequired"))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t("EmailInput.Error"),
      ),
  });
  const onSubmit = async (values, actions) => {
    setDisabled(true);
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).finally(() => {
      setDisabled(false);
      actions.resetForm();
    });
  };

  useEffect(() => {
    if (isInView) {
      animate("#title", { opacity: 1, y: 0 }, { duration: 0.4, delay: 0.1 });
      animate("#subtitle", { opacity: 1, y: 0 }, { duration: 0.4, delay: 0.3 });
      animate(
        "#nameInput",
        { opacity: 1, y: 0 },
        { duration: 0.4, delay: 0.6 },
      );
      animate(
        "#emailInput",
        { opacity: 1, y: 0 },
        { duration: 0.4, delay: 0.8 },
      );
      animate(
        "#messageInput",
        { opacity: 1, y: 0 },
        { duration: 0.4, delay: 1 },
      );
      animate("#submit", { opacity: 1, y: 0 }, { duration: 0.4, delay: 1.2 });
    }
  }, [isInView]);

  return (
    <section
      id="contact"
      className="relative z-20 flex min-h-screen w-full items-center justify-center bg-[linear-gradient(251deg,#987776_0%,#66564E_99.97%)] px-5 py-20 shadow-[0px_0px_74px_-17px_rgba(0,0,0,0.8)] md:px-32 xl:px-64"
    >
      <div
        ref={container}
        className="bg-[rgba(255, 255, 255, 0.15)] flex h-full w-full flex-col justify-normal gap-5 rounded-3xl p-6 text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)] md:justify-between lg:flex-row lg:p-16 2xl:gap-24"
      >
        <div className="flex w-full flex-col justify-center gap-6 lg:w-2/3">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            id="title"
            className="font-vonca text-[2.7rem] font-medium leading-none sm:text-5xl md:text-6xl"
          >
            {formatLineBreak(t("Title"))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            id="subtitle"
            className="text-lg"
          >
            {formatLineBreak(t("Subtitle"))}
          </motion.p>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={yupSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex w-full flex-col gap-1 lg:w-1/2">
            <Field type="text" name="extra" className="hidden" />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              id="nameInput"
              className="mb-3"
            >
              <label htmlFor="name" className="">
                {t("NameInput.Title")}
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={t("NameInput.Placeholder")}
                className="w-full rounded-2xl bg-[#DFD5D4] p-4 text-[#66564E] placeholder-[rgba(102,86,78,0.75)] caret-black outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="mt-1 pl-4 text-red-800"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              id="emailInput"
              className="mb-3"
            >
              <label htmlFor="email" className="">
                {t("EmailInput.Title")}
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={t("EmailInput.Placeholder")}
                className="w-full rounded-2xl bg-[#DFD5D4] p-4 text-[#66564E] placeholder-[rgba(102,86,78,0.75)] caret-black outline-none"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="mt-1 pl-4 text-red-800"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              id="messageInput"
              className="mb-3"
            >
              <label htmlFor="message" className="">
                {t("MessageInput.Title")}
              </label>
              <Field
                component="textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={t("MessageInput.Placeholder")}
                className="w-full rounded-2xl bg-[#DFD5D4] p-4 text-[#66564E] placeholder-[rgba(102,86,78,0.75)] caret-black outline-none"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} id="submit">
              <Button
                text={t("CTA")}
                className={"max-w-[180px] px-3 py-2"}
                disabled={disabled}
              />
            </motion.div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
