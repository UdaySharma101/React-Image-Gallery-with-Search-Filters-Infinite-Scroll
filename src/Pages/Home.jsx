import React, { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";
import ImageGrid from "../Components/Gallery/ImageGrid";
import { dataFetching } from "../api/images";
import ImageModel from "../Components/Preview/ImageModel";

const Home = () => {
  const loaderRef = useRef(null);

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('f1')
  const [selectedImage, setSelectedImage] = useState(null)
  const handleCategory = (newCategory) => {
    setImages([]);
    setPage(1);
    setCategory(newCategory);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    async function getData() {

      setLoading(true);
      // console.log(category, page);
      const data = await dataFetching(category, page);
      //  console.log("Category changed:", category);
      setImages((prev) => {
        const merged = [...prev, ...data];

        return merged.filter(
          (img, index, arr) =>
            index === arr.findIndex((item) => item.id === img.id)
        );

      })

      setLoading(false);

    }

    getData();
  }, [category, page]);
  


    useEffect(() => {

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      });


      if (loaderRef.current) {
        observer.observe(loaderRef.current);
      }


      return () => observer.disconnect();
    }, [loading]);



  return (
    <div>
      <Hero />
     <ImageGrid
  images={images}
  category={category}
  setCategory={handleCategory}
  setSelectedImage={setSelectedImage}
/>

{selectedImage && (
  <ImageModel
    image={selectedImage}
    setSelectedImage={setSelectedImage}
  />
)}
       
      <div
        ref={loaderRef}
        className="flex items-center justify-center h-20 font-bold text-gray-400"
      >
        {loading ? "Loading..." : "Scroll for more"}
      </div>
    </div>
  );
};

export default Home;