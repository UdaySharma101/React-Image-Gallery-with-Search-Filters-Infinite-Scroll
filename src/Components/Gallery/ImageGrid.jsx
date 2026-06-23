import ImageCard from '../Gallery/ImageCard'
// import { Search, Leaf, Plane, Car, Utensils, PawPrint } from "lucide-react";
import nature from "../../assets/images/nature.jpg"
import car from "../../assets/images/cars.jpg"
import mount from "../../assets/images/mountains.jpg"
import food from "../../assets/images/food.jpg"
import animal from "../../assets/images/animals.jpg"
import travel from "../../assets/images/travel.jpg"
import Skeleton from '../Skeleton/Skeleton'


const ImageGrid = ({ images, category, setCategory, setSelectedImage, saved, setSaved }) => {
  const categeories = [
    {

      logo: nature,
      name: 'Nature'
    },
    {

      logo: travel,
      name: 'Travel',
    },
    {
      logo: car,
      name: 'Vehicle'
    },
    {
      logo: food,
      name: 'Food'
    },
    {
      logo: animal,
      name: 'Animals'
    },
    {
      logo: mount,
      name: 'Mountains'
    }
  ]


  return (
    <>
      <div className="flex flex-col overflow-x-auto shrink-0  whitespace-nowrap items-center justify-center gap-16 px-3">

        <div className='h-0 flex p-0 m-0 items-center justify-center py-4' >

          <h1 className=' text-2xl font-bold pt-12 '>Explore Trending Photos</h1>

        </div>

        <div className='flex w-full justify-around sm:gap-5 pb-4 '>
          {categeories.map((item) => {
            return (<button
              onClick={() => {
                setCategory(item.name)
              }}
              key={item.name}
              className={` rounded-full h-12 w-[9rem] shadow-sm   bg-white/10 backdrop-blur-md border  text-sm  hover:bg-[#3B82F6] hover:text-white transition-all duration-300 flex  items-center  justify-center gap-5 px-1
                ${category === item.name
                  ? "bg-blue-500 text-white"
                  : "bg-white text-black"}
                `}
            >
              <span className='h-8 w-8   rounded-full overflow-hidden'>
                <img className='h-full object-cover object w-full scale-110 ' src={item.logo} alt="" />
              </span>
              <span className='font-bold '>{item.name}</span>
            </button>
            )
          })}
        </div>
      </div>


      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3 p-6 ">
        {images.map((image) => (

          <div key={image.id} className="mb-5 break-inside-avoid">
            <ImageCard saved={saved} setSaved={setSaved} image={image} setSelectedImage={(img) => {
              setSelectedImage(img);
            }} />
            
          </div>

        ))}

      </div>
    </>
  )
}

export default ImageGrid
