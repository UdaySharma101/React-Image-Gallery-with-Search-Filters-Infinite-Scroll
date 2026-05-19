import React, { useEffect, useState } from 'react'

const ImageCard = () => {

  const [imgs, setImgs] = useState([])
async function dataFetching() {
  try {
    let response = await fetch(
      "https://api.pexels.com/v1/curated?per_page=30",
      {
        headers: {
          Authorization: import.meta.env.VITE_PEXELS_API,
        },
      }
    );

    let data = await response.json();

    console.log(data.photos);

    setImgs(data.photos);

  } catch (error) {
    console.log(error);
  }
}

  useEffect(() => {
    dataFetching()
  }, [])

  return (
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 p-6">
  
  {imgs.map((item) => (
    
    <div
      key={item.id}
      className="break-inside-avoid mb-4 overflow-hidden rounded-xl"
    >
      
      <img
        className="w-full h-auto rounded-xl"
        src={item.src.large}
        alt={item.alt}
      />

    </div>

  ))}

</div>
  )
}

export default ImageCard
