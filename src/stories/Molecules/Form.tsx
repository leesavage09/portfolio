import { Button } from '../Atoms/Button';

interface FormProps {
  children: string | JSX.Element | Array<JSX.Element>;
  submitLabel: string;
}

export const Form: React.FC<FormProps> = ({ children, submitLabel }) => {
  return (
    <div className="dark:bg-dark-blue-700 dark:text-blue-100 bg-blue-200 text-dark-blue-800 rounded-md drop-shadow-md p-6 sm:p-8 md:p-12 lg:p-16 w-full">
      {children}
      <Button
        primary
        label={submitLabel}
        onClick={() => console.log('submit form')}
        className="float-right"
      />
    </div>
  );
};
