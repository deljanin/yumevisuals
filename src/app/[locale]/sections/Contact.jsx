"use client";
import Button from "@/components/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";
import formatLineBreak from "@/utils/formatLineBreak";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as yup from "yup";

export default function Contact() {
  const t = useTranslations("HomePage.Contact");

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
    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).finally(() => {
      actions.resetForm();
    });
  };

  return (
    <div
      id="contact"
      className="relative z-20 flex min-h-screen w-full items-center justify-center bg-[linear-gradient(251deg,#987776_0%,#66564E_99.97%)] px-5 shadow-[0px_0px_74px_-17px_rgba(0,0,0,0.8)] md:px-32 xl:px-64"
    >
      <div className="bg-[rgba(255, 255, 255, 0.15)] flex h-full w-full flex-col justify-normal gap-24 rounded-3xl p-16 text-white shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)] md:flex-row md:justify-between">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="font-vonca text-6xl font-medium">
            {formatLineBreak(t("Title"))}
          </h1>
          <p className="text-lg">{formatLineBreak(t("Subtitle"))}</p>
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
          <Form className="flex w-1/2 flex-col gap-1">
            <Field type="text" name="extra" className="hidden" />
            <div className="mb-3">
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
            </div>
            <div className="mb-3">
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
            </div>
            <div className="mb-3">
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
            </div>
            <Button text={t("CTA")} className={"max-w-[180px] px-3 py-2"} />
          </Form>
        </Formik>
      </div>
    </div>
  );
}
