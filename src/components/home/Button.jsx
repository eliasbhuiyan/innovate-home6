const Button = ({ title, className }) => {
  return (
    <button
      className={`${className} hover:text-white capitalize py-3 px-7 border-2 border-brand rounded-full font-primary text-lg font-semibold hover:bg-brand transition-all`}
    >
      {title}
    </button>
  );
};

export default Button;
