import CounterItems from "./CounterItems";
import GalleryItems from "./GalleryItems";

const Gallery = () => {
  return (
    <section className="overflow-hidden relative bg-[#c4c4c414]">
      <div className="absolute top-0 right-0 -z-10">
        <img src="/counter-element.png" alt="counter-element" />
      </div>
      <div className="container">
        <div className="flex gap-7">
          <GalleryItems className="-mt-28" src="/gallery-1.png" />
          <GalleryItems className="mt-[-133px]" src="/gallery-2.png" />
          <GalleryItems className="-mt-4" src="/gallery-3.png" />
          <GalleryItems className="mt-[-100px]" src="/gallery-4.png" />
        </div>
        <div className="my-24 flex counterItems">
          <CounterItems countValue="53" countPost="k" title="Happy client" />
          <CounterItems countValue="10" countPost="%" title="Projects Done" />
          <CounterItems countValue="120" countPost="M" title="Gets Award" />
          <CounterItems countValue="16" title="Operated Years" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
