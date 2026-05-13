import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-16 sm:py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Discover Free High Quality Photos
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
          Search and explore beautiful images for your next project,
          wallpaper, or creative inspiration.
        </p>

        <div className="relative max-w-2xl mx-auto mt-8">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />

          <input
            type="text"
            placeholder="Search nature, cars, mountains..."
            className="w-full rounded-2xl bg-white px-14 py-4 text-gray-700 shadow-md outline-none border border-gray-100 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {["Nature", "Travel", "Cars", "Food", "Animals"].map((item) => (
            <button
              key={item}
              className="rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:bg-gray-900 hover:text-white transition"
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