import React from 'react';
import { X, Save } from 'lucide-react';

const ImageModel = ({ image, setSelectedImage, saved, setSaved }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(image.src.original);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `pexels-${image.id}.jpg`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const isSaved = saved.some(
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
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2">
      <div
        className="bg-white rounded-xl p-4 w-[95%] sm:w-[90%] max-w-5xl h-[90vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-3 right-3 z-50 text-gray-600 hover:text-black"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <div className="h-[65vh] sm:h-[75vh]">
          <img
            src={image.src.large2x}
            alt={image.alt || "Preview"}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <h2 className="font-bold text-lg">
              {image.photographer}
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Download
            </button>

            <button
              onClick={() => handleSave(image)}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              {isSaved ? "Saved" : <Save size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModel;