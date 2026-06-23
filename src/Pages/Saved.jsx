import { useEffect, useState } from "react";
import ImageCard from "../Components/Gallery/ImageCard";

const Saved = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedImages")) || [];
    setSavedImages(data);
  }, []);

  const handleRemove = (id) => {
    const updatedImages = savedImages.filter(
      (image) => image.id !== id
    );

    setSavedImages(updatedImages);

    localStorage.setItem(
      "savedImages",
      JSON.stringify(updatedImages)
    );
  };
  if (savedImages.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl text-gray-400 font-bold">
          No Saved Images Yet 📷
        </h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-400 py-8">
        Saved Images
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 p-6">
        {savedImages.map((image) => (

          <div
            key={image.id}
            className="mb-5 break-inside-avoid"
          >
            <ImageCard image={image} />
            <button
              onClick={() => handleRemove(image.id)}
              className="w-full mt-2 bg-red-500 text-white p-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;