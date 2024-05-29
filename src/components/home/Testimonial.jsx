import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestItem from "./TestItem";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="py-100 bg-[#F8F8FF]">
      <div className="container">
        <h2 className="text-primary text-5xl font-bold text-center mb-20">
          What The People Thinks About Us
        </h2>

        <Slider {...settings}>
          <TestItem />
          <TestItem />
          <TestItem />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
