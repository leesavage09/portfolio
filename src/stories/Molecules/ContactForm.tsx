import { Input } from '@stories/Atoms/Input';
import { Modal } from '@stories/Atoms/Modal';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { useFormik } from 'formik';
import { useState } from 'react';
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
  const [showModal, setShowModal] = useState(false);
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
    onSubmit: async (values) => {
      setResult(undefined);
      setShowModal(true);
      const result = await postMessage(values);
      setResult(result);
      if (result?.status === 'OK') formik.resetForm();
    },
  });

  return (
    <>
      <Modal visible={showModal} close={() => setShowModal(false)}>
        {!result ? (
          <Paragraph>Your message is sending....</Paragraph>
        ) : result?.status === 'OK' ? (
          <Paragraph>Message Sent</Paragraph>
        ) : (
          <Paragraph>
            Your message could not be sent. Please check you have provided valid
            data and try again later...
          </Paragraph>
        )}
      </Modal>
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
          className="float-right ml-4"
          disabled={formik.isSubmitting}
          disabledText="Sending Email..."
        >
          Send Email
        </Button>
        {result &&
          (result?.status === 'OK' ? (
            <Paragraph className="text-sm">Message Sent</Paragraph>
          ) : (
            <Paragraph className="text-sm">
              Your message could not be sent. Please check you have provided
              valid data and try again later...
            </Paragraph>
          ))}
      </form>
    </>
  );
};
