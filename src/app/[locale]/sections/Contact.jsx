'use client';
import Button from '@/components/Button';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import formatLineBreak from '@/utils/formatLineBreak';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function Contact() {
  const t = useTranslations('HomePage.Contact');

  const yupSchema = yup.object().shape({
    name: yup
      .string()
      .max(40, t('NameInput.Error'))
      .required(t('NameInput.ErrorRequired')),
    email: yup
      .string()
      .required(t('EmailInput.ErrorRequired'))
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        t('EmailInput.Error')
      ),
  });
  const onSubmit = async (values, actions) => {
    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).finally(() => {
      actions.resetForm();
    });
  };

  return (
    <div
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-5 md:px-32 xl:px-64
     bg-[linear-gradient(251deg,#987776_0%,#66564E_99.97%)] shadow-[0px_0px_74px_-17px_rgba(0,0,0,0.79)]">
      <div
        className="w-full h-full p-16 rounded-3xl text-white flex flex-col gap-24 justify-normal md:justify-between md:flex-row
      shadow-[0px_0px_210px_0px_rgba(0,0,0,0.50)] bg-[rgba(255, 255, 255, 0.15)]">
        <div className="flex justify-center flex-col gap-6">
          <h1 className="font-vonca font-medium text-6xl">
            {formatLineBreak(t('Title'))}
          </h1>
          <p className="text-lg">{formatLineBreak(t('Subtitle'))}</p>
        </div>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={yupSchema}
          onSubmit={onSubmit}>
          <Form className="w-1/2 flex flex-col gap-1">
            <Field type="text" name="extra" className="hidden" />
            <div className="mb-3">
              <label htmlFor="name" className="">
                {t('NameInput.Title')}
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder={t('NameInput.Placeholder')}
                className="w-full p-4 outline-none rounded-2xl bg-[#DFD5D4] placeholder-[rgba(102,86,78,0.75)] caret-black text-[#66564E]"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-800 mt-1 pl-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="">
                {t('EmailInput.Title')}
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder={t('EmailInput.Placeholder')}
                className="w-full p-4 outline-none rounded-2xl bg-[#DFD5D4] placeholder-[rgba(102,86,78,0.75)] caret-black text-[#66564E]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-800 mt-1 pl-4"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="">
                {t('MessageInput.Title')}
              </label>
              <Field
                component="textarea"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder={t('MessageInput.Placeholder')}
                className="w-full p-4 outline-none rounded-2xl bg-[#DFD5D4] placeholder-[rgba(102,86,78,0.75)] caret-black text-[#66564E]"
              />
            </div>
            <Button text={t('CTA')} className={'max-w-[180px] py-2 px-3'} />
          </Form>
        </Formik>
      </div>
      <div
        className="absolute inset-0 pointer-events-none top-0 left-0 right-0 bottom-0 z-10
        opacity-[0.05]
        "
        style={{
          backgroundImage: 'url(/grain.png)',
          backgroundSize: '100px',
        }}></div>
    </div>
  );
}
