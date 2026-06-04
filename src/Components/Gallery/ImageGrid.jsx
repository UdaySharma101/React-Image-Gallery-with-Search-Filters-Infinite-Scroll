import React from 'react'
import ImageCard from '../Gallery/ImageCard'

const ImageGrid = ({ images }) => {
  return (
   <>
      <h1 className='z-10 flex justify-center  text-2xl font-bold pt-12 '>Explore Trending Photos</h1>
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 p-6 ">
      {images.map((image) => (
        
        <div key={image.id} className="mb-5 break-inside-avoid">
          <ImageCard image={image} />
        </div>

      ))}

    </div>
   </>
  )
}

export default ImageGrid
