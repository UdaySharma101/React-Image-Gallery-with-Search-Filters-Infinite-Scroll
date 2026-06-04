
import React, { useEffect, useState } from "react";
import { Search, Leaf, Plane, Car, Utensils, PawPrint } from "lucide-react";
import heroBg from "../../assets/images/hero.jpg"
import HeroDiv from "./HeroDiv";
import Marquee from "react-fast-marquee";
const Hero = () => {
    const [ani, setAni] = useState(false)
    useEffect(()=>{
        setAni(true)
    },[])
    const categeories = [
        {

            logo: Leaf,
            name: 'Nature'
        },
        {

            logo: Plane,
            name: 'Travel',
        },
        {
            logo: Car,
            name: 'Car'
        },
        {
            logo: Utensils,
            name: 'Food'
        },
        {
            logo: PawPrint,
            name: 'Animals'
        }
    ]
    return (
        <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }}>

            <div className="absolute inset-0 bg-black/40"></div>


            <div className="relative z-10 max-w-7xl w-full lg:w-1/2 px-5 py-16 sm:py-20  flex flex-col lg:ml-10 sm:flex  sm:items-center sm:justify-center  min-h-screen justify-start text-left items-start">

                <h1 className={`
                   text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight
                                     transition-all duration-1000

                    ${
                    ani ? 'opacity-100 translate-y-0'
                    : "opacity-0 translate-y-12"
                  }
                    `}>
                    Discover Free <br />

                    <span className="text-[#3B82F6] ">High Quality </span>
                    Photos
                </h1>

                <p className={`
                    mt-5 max-w-2xl mx-auto text-gray-200 text-base sm:text-lg
                  transition-all duration-1000
                  ${
                    ani ? 'opacity-100 translate-y-0'
                    : "opacity-0 translate-y-12"
                  }
                    `}>
                    Search and explore beautiful images for your next project,
                    wallpaper, or creative inspiration.
                </p>

                <div className="relative max-w-2xl w-full mx-auto mt-8">

                    <Search
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                        size={20}
                    />

                    <input type="text" placeholder="Search nature, cars, mountains..."
                        className="w-full rounded-2xl bg-white/90 backdrop-blur-md px-14 py-4 text-gray-700 shadow-2xl outline-none border border-white/20 focus:ring-2 focus:ring-blue-400" />
                </div>


                <div className="mt-6 flex flex-wrap justify-center gap-3">
                    {categeories.map((item) => {
                        const Icon = item.logo

                        return (<button
                            key={item.name}
                            className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-[#3B82F6] hover:text-white transition-all duration-300 flex  gap-2"
                        >
                            <Icon size={18} />
                            <span>{item.name}</span>
                        </button>
                        )
                    })}
                </div>

            </div>
         {/* <div className="mt-10 w-full"> */}
  {/* <Marquee
    speed={40}
    gradient={false}
    pauseOnHover={true}
  >
    <div className="flex gap-6 px-5">
      <HeroDiv />
      <HeroDiv />
      <HeroDiv />
      <HeroDiv />
    </div>
  </Marquee>
</div> */}
<HeroDiv/>
        </section>
    );
};

export default Hero
