import {
  ChangeEvent,
  FocusEvent,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps
  extends Pick<
      InputHTMLAttributes<HTMLInputElement>,
      'value' | 'placeholder' | 'className'
    >,
    Pick<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'value' | 'placeholder' | 'className'
    > {
  id: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  textArea?: boolean;
  error?: string;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: FocusEvent<HTMLInputElement> | FocusEvent<HTMLTextAreaElement>
  ) => void;
}

export const Input: React.FC<InputProps> = ({
  id,
  className = '',
  type = 'text',
  label,
  textArea,
  error,
  onChange,
  onBlur,
  ...rest
}) => {
  const inputStyle = twMerge(
    'p-2 rounded-md dark:bg-dark-blue dark:text-blue-100 dark:placeholder:text-blue-800 bg-blue-500 text-dark-blue placeholder:text-dark-blue-300',
    className
  );

  return (
    <div className="flex flex-col mb-9">
      <label
        className={twMerge(
          'mb-1  text-md',
          error
            ? 'dark:text-primary-100 text-primary font-bold'
            : 'dark:text-blue-100 text-dark-blue'
        )}
        htmlFor={id}
      >
        {error ? error : label}
      </label>
      {!textArea && (
        <input
          className={inputStyle}
          type={type}
          id={id}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
      )}
      {textArea && (
        <textarea
          rows={10}
          className={`resize-y ${inputStyle}`}
          id={id}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
      )}
    </div>
  );
};
