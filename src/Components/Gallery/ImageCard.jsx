import { Download, Save } from "lucide-react";

const ImageCard = ({ image, setSelectedImage }) => {
  // console.log(image)
  return (
    <div 
      onClick={() => console.log("DIV CLICKED")}

    className="group relative overflow-hidden rounded-2xl shadow-md bg-gray-100 cursor-pointer">

      <img
        onClick={() => {
          console.log("CLICKED IMAGE:", image);
          setSelectedImage(image);
        }}
        src={image.src.large}
        alt={image.alt || "Gallery image"}
        className="w-full border-red-500  object-cover transition-transform duration-500 group-hover:scale-105 "
      />

      <div className=" absolute inset-0 pointer-events-none  flex flex-col justify-between bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
        <div className="flex justify-end gap-2">
          <button className="rounded-full bg-white/90 p-2 text-gray-800 hover:bg-white transition">
            <Save size={18} />
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