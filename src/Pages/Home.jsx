import React, { useEffect, useRef, useState } from "react";
import Hero from "../Components/Hero/Hero";
import ImageGrid from "../Components/Gallery/ImageGrid";
import { dataFetching } from "../api/images";
import ImageModel from "../Components/Preview/ImageModel";

const Home = () => {
  const loaderRef = useRef(null);

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('f1')
  const [selectedImage, setSelectedImage] = useState(null)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [saved, setSaved] = useState([])
  const filterImg = images.filter((image) => {
    return (image.alt || "").toLowerCase().includes(search.toLowerCase())
  })

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
      const data = await dataFetching(query || category, page);

      console.log("DATA:", data);
      console.log("IS ARRAY:", Array.isArray(data));

      setImages((prev) => {
          const merged = [...prev, ...(Array.isArray(data) ? data : [])];


        return merged.filter(
          (img, index, arr) =>
            index === arr.findIndex((item) => item.id === img.id)
        );

      })

      setLoading(false);
    }

    getData();
  }, [query, page]);



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



  const handleSave = (image) => {
    setSaved((prev) => {
      const merged = [...prev, image];

      return merged.filter(
        (img, index, arr) =>
          index === arr.findIndex((item) => item.id === img.id)
      );
    });
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem("savedImages");

  //   if (saved) {
  //     setSaved(JSON.parse(saved));
  //   }
  // }, []);
  useEffect(() => {
    const saved = localStorage.getItem("savedImages");

    if (saved) {
      const parsed = JSON.parse(saved);

      setSaved(Array.isArray(parsed) ? parsed : []);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "savedImages",
      JSON.stringify(saved)
    );
  }, [saved]);
  return (
    <div>
      <Hero search={search} setSearch={setSearch} image={images} setQuery={setQuery} setPage={setPage} setImages={setImages} />
      <ImageGrid
        images={filterImg}
        category={category}
        setCategory={handleCategory}
        setSelectedImage={setSelectedImage}
        saved={saved}
        setSaved={setSaved}
        handleSave={handleSave}
      // loading={loading}
      />

      {selectedImage && (
        <ImageModel
          image={selectedImage}
          setSelectedImage={setSelectedImage}
          saved={saved}
          setSaved={setSaved}
          handleSave={handleSave}
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