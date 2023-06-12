import { Input } from '@stories/Atoms/Input';
import { Modal } from '@stories/Atoms/Modal';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { SyntheticEvent, useState } from 'react';
import { Button } from '../Atoms/Button';

type FormEventTarget = typeof EventTarget & {
  name: { value: string };
  email: { value: string };
  message: { value: string };
};

export const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState<{ status: any; error: any }>();

  const postMessage = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
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
      return { error: error, data: null };
    }
  };

  const getFormData = (e: SyntheticEvent) => {
    const target = e.target as unknown as FormEventTarget;
    return {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };
  };

  const resetFromData = (e: SyntheticEvent) => {
    const target = e.target as unknown as FormEventTarget;
    target.name.value = '';
    target.email.value = '';
    target.message.value = '';
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = getFormData(e);

    if (
      data.name ||
      typeof data.name === 'string' ||
      data.email ||
      typeof data.email === 'string' ||
      data.message ||
      typeof data.message === 'string'
    ) {
      const result = await postMessage(data);
      setResult(result);
      if (result?.status === 'OK') resetFromData(e);
      setShowModal(true);
    }

    setLoading(false);
  };

  return (
    <>
      <Modal visible={showModal} close={() => setShowModal(false)}>
        {result?.status === 'OK' ? (
          <Paragraph>Message Sent</Paragraph>
        ) : (
          <Paragraph>
            <>{result?.error}</>
          </Paragraph>
        )}
      </Modal>
      <form
        onSubmit={submit}
        className="dark:bg-dark-blue-700 dark:text-blue-100 bg-blue-200 text-dark-blue-800 rounded-md drop-shadow-md p-6 sm:p-8 md:p-12 lg:p-16 w-full"
      >
        <Input id="name" label="Name" placeholder="Enter your Name" />
        <Input id="email" label="Email" placeholder="Enter your Email" />
        <Input
          id="message"
          textArea
          label="Message"
          placeholder="Enter your Message"
        />
        <Button
          type="submit"
          className="float-right"
          disabled={loading}
          disabledText="Sending Email..."
        >
          Send Email
        </Button>
      </form>
    </>
  );
};
