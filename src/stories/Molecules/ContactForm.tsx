import { Modal } from '@stories/Atoms/Modal';
import { Paragraph } from '@stories/Atoms/Paragraph';
import { SyntheticEvent, useState } from 'react';
import { Button } from '../Atoms/Button';

interface FormProps {
  children: string | JSX.Element | Array<JSX.Element>;
  submitLabel: string;
}

export const ContactForm: React.FC<FormProps> = ({ children }) => {
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

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const data = {
      name: target.name.value,
      email: target.email.value,
      message: target.message.value,
    };

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
        {children}
        <Button
          type="submit"
          className="float-right"
          disabled={loading}
          disabledText="Sending Email..."
        >
          Live Link
        </Button>
      </form>
    </>
  );
};
