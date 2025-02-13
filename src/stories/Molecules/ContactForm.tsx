import { Input } from '@stories/Atoms/Input';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { useFormik } from 'formik';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';
import { Button } from '../Atoms/Button';

interface messageResponse {
  status?: string;
  error?: unknown;
}

const postMessage = async (data: {
  name: string;
  email: string;
  message: string;
}): Promise<messageResponse> => {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const fetchResponse = await fetch(`/api/sendMail/`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (error) {
    return { error: error };
  }
};

export const ContactForm: React.FC = () => {
  const [result, setResult] = useState<messageResponse>();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(150, 'The maximum length on name is 200 characters')
        .required('! Please provide your name'),
      email: Yup.string()
        .email('Not a valid email')
        .required('! Please provide an email'),
      message: Yup.string()
        .max(3000, 'The maximum length of your message is 3000 characters')
        .required('! Please write a message'),
    }),
    validate: () => setResult(undefined),
    onSubmit: async (values) => {
      setResult(undefined);
      const result = await postMessage(values);
      setResult(result);
      if (result?.status === 'OK') formik.resetForm();
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="dark:bg-dark-blue-700 dark:text-blue-100 bg-blue-200 text-dark-blue-800 rounded-md drop-shadow-md p-6 sm:p-8 md:p-12 lg:p-16 w-full"
      >
        <Input
          id="name"
          label="Name"
          placeholder="Enter your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
        />
        <Input
          id="email"
          label="Email"
          placeholder="Enter your Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />
        <Input
          id="message"
          textArea
          label="Message"
          placeholder="Enter your Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.message}
        />
        <Button
          type="submit"
          primary
          className={twMerge(
            'float-right ml-4',
            formik.isSubmitting ? 'animate-pulse' : ''
          )}
          disabled={formik.isSubmitting}
          disabledText="Sending Email..."
        >
          Send Email
        </Button>
        {formik.isSubmitting && (
          <Paragraph className="animate-pulse text-sm lg:text-sm">
            Your message is sending....
          </Paragraph>
        )}
        {result &&
          (result?.status === 'OK' ? (
            <Paragraph className="text-sm lg:text-sm">Message Sent</Paragraph>
          ) : (
            <Paragraph className="text-sm lg:text-sm">
              Sorry your message could not be sent. Please try again later
            </Paragraph>
          ))}
      </form>
    </>
  );
};
