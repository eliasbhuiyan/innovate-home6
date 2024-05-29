const ChooseItems = ({ children }) => {
  return (
    <div className="py-11 pl-7 rounded-xl flex gap-9 items-start transition-all hover:shadow-lg">
      <span className="relative mt-2 w-6 h-6 rounded-full bg-brand after:absolute after:top-0 after:left-1/2 after:w-6 after:h-6 after:rounded-full after:bg-[#CBC8F0]"></span>
      <p className="text-lg font-normal text-secondary w-[325px]">{children}</p>
    </div>
  );
};

export default ChooseItems;
