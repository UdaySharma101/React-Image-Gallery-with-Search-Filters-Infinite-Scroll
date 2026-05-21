import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import ImageGrid from '../Components/Gallery/ImageGrid'
import {dataFetching} from '../api/images'


const Home = () => {
  const [images, setImages] = useState([])

  useEffect(()=>{
    async function getData() {
      const data = await dataFetching()
      setImages(data)
    }
    getData()
  },[])

  return (
    <div>
      <Hero/>
      <ImageGrid images={images} />
    </div>
  )
}

export default Home
