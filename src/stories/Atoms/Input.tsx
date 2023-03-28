import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  id: string;
  type?: HTMLInputTypeAttribute;
  label: string;
  placeholder?: string;
  textArea?: boolean;
}

export const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  label,
  placeholder,
  textArea,
}) => {
  const inputStyle =
    'p-2 rounded-md dark:bg-dark-blue dark:text-blue-100 dark:placeholder:text-blue-800 bg-blue-500 text-dark-blue placeholder:text-dark-blue-300';

  return (
    <div className="flex flex-col mb-9">
      <label
        className="mb-1 dark:text-blue-100 text-dark-blue text-md"
        htmlFor={id}
      >
        {label}
      </label>
      {!textArea && (
        <input
          className={inputStyle}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      )}
      {textArea && (
        <textarea
          rows={10}
          className={`resize-y ${inputStyle}`}
          id={id}
          name={id}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};
