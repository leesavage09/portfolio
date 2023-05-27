import { ReactNode } from 'react';
import { Button } from './Button';

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  close: () => void;
}

export const Modal = ({ children, visible, close }: ModalProps) => {
  if (!visible) return <></>;

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-dark-blue-800 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full justify-center p-4 text-center items-center"
          onClick={close}
        >
          <div
            className="relative transform overflow-hidden rounded-lg bg-blue-100 dark:bg-dark-blue-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <Button
              type="onClick"
              className="mt-6 float-right clear-both  sm:clear-none sm:float-left sm:mr-8 sm:mt-0"
              onClick={close}
            >
              Live Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
