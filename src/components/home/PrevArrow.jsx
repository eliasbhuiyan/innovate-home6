import { FaChevronLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-100px] z-10 w-16 h-16 rounded-full text-white bg-[#19bf0070] hover:bg-brand flex justify-center items-center text-xl cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default PrevArrow;
