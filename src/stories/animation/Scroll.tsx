export const Scroll = () => {
  return (
    <span
      className="
                border-2
              dark:border-blue-100
              border-dark-blue

                w-6 h-11 
                rounded-full
                drop-shadow-lg 
                
                duration-300 
                absolute bottom-6 

                flex justify-center items-center

              before:bg-dark-blue 
              before:dark:bg-blue-100

                before:w-2
                before:h-2
                before:rounded-full

                before:relative

                before:animate-scroll
        "
    />
  );
};
