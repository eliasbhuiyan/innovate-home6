import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-100px] z-10 w-16 h-16 rounded-full text-white bg-[#19bf0070] hover:bg-brand flex justify-center items-center text-xl cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
