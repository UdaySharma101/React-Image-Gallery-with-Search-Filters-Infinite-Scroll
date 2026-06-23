import { Download, Save } from "lucide-react";

const ImageCard = ({ image, setSelectedImage, saved, setSaved }) => {
  // console.log(image)
  const isSaved = saved?.some(
    (item) => item.id === image.id
  );

const handleSave = (image) => {
  setSaved((prev) => {
    const alreadySaved = prev.some(
      (item) => item.id === image.id
    );

    if (alreadySaved) return prev;

    return [...prev, image];
  });
};
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-md bg-gray-100 cursor-pointer">

      <img
        onClick={() => {
          setSelectedImage?.(image);
        }}
        loading="lazy"
        src={image.src.medium}
        alt={image.alt || "Gallery image"}
        className="w-full border-red-500  object-cover transition-transform duration-500 group-hover:scale-105 "
      />

      <div className=" absolute inset-0 pointer-events-none  flex flex-col justify-between bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <div className="flex justify-end gap-2">
          <button   onClick={() => handleSave(image)}
            className="rounded-full bg-white/90 p-2 text-gray-800 hover:bg-white transition">
            {isSaved ? "Saved" : <Save size={18} />}

          </button>

          <button className="rounded-full bg-white/90 p-2 text-gray-800 hover:bg-white transition">
            <Download size={18} />
          </button>
        </div>

        <h3 className="text-white font-semibold text-sm">
          {image.photographer}
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;