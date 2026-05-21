import React from 'react'
import ImageCard from '../Gallery/ImageCard'

const ImageGrid = ({images}) => {
  return (
    <div  className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 p-6">
       {images.map((item) => (
    
     <div
      key={item.id}
      className="break-inside-avoid mb-4 overflow rounded-xl"
    >
      
      <img
        className="w-full h-auto rounded-xl cursor-pointer"
        src={item.src.large}
        alt={item.alt}
      />

    </div>

  ))}

      {/* <ImageCard images={images} /> */}
    </div>
  )
}

export default ImageGrid
