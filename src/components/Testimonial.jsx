import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SampleNextArrow({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="bg-red-700 z-50" />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="py-100">
      <div className="container">
        <h2 className="text-primary text-5xl font-bold text-center">
          What The People Thinks About Us
        </h2>

        <Slider {...settings}>
          <div>
            <img src="/test-1.png" className="w-full h-96" alt="" />
          </div>
          <div>
            <img src="/test-1.png" className="w-full h-96" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
