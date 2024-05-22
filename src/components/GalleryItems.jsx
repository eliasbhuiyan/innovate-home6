const GalleryItems = ({ className, src }) => {
  return (
    <div className={`w-1/4 ${className}`}>
      <img src={src} className="w-full" alt="gallery" />
    </div>
  );
};

export default GalleryItems;
