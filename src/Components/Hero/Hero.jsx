
import React from "react";
import { Search } from "lucide-react";
import heroBg from "../../assets/images/hero.jpg"

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 sm:py-20 text-center flex flex-col items-center justify-center min-h-screen">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Discover Free High Quality Photos
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-200 text-base sm:text-lg">
          Search and explore beautiful images for your next project,
          wallpaper, or creative inspiration.
        </p>

        
        <div className="relative max-w-2xl w-full mx-auto mt-8">
          
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search nature, cars, mountains..."
            className="w-full rounded-2xl bg-white/90 backdrop-blur-md px-14 py-4 text-gray-700 shadow-2xl outline-none border border-white/20 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Nature", "Travel", "Cars", "Food", "Animals"].map((item) => (
            <button
              key={item}
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;