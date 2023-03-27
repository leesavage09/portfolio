interface ButtonProps {
  primary: boolean;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ primary, label }) => {
  return (
    <button
      type="button"
      className={`
            ${primary ? 'bg-primary' : 'bg-blue'} 
            text-dark-blue-800 
            
            uppercase 

            py-3
            px-9 
            m-8

            rounded-md 
            drop-shadow-lg 
            border-none 

            duration-300 
            hover:-translate-y-1
            `}
    >
      {label}
    </button>
  );
};
