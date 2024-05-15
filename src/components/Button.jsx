const Button = ({ title }) => {
  return (
    <button className="capitalize py-3 px-7 border-2 border-brand rounded-full text-white font-primary text-lg font-semibold hover:bg-brand transition-all">
      {title}
    </button>
  );
};

export default Button;
