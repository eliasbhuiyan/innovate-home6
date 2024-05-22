import Button from "./Button";
import ChooseItems from "./ChooseItems";

const CooseUs = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 -z-10">
        <img src="/choose-element.png" alt="choose-element" />
      </div>
      <div className="container flex justify-between">
        <div className="w-1/2 flex flex-col gap-2">
          <ChooseItems>
            We solve real-world problems through people and the web.
          </ChooseItems>
          <ChooseItems>
            We solve real-world problems through people and the web.
          </ChooseItems>
          <ChooseItems>
            We solve real-world problems through people and the web.
          </ChooseItems>
          <ChooseItems>
            We solve real-world problems through people and the web.
          </ChooseItems>
        </div>
        <div className="w-fit">
          <h2 className="text-primary text-5xl font-bold">Why Choose Us</h2>
          <p className="text-lg font-normal text-secondary mt-6 mb-11 w-[393px]">
            We are now a team of strategists, engineers, designers, and
            marketers who both use and develop technology for a variety of
            client needs.
          </p>
          <Button title="Contact Us" className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default CooseUs;
