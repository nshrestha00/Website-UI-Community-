import { assets } from "../../assets/assets";

const Categories = () => {
  return (
    <div id="plant-categories" className="p-16 flex justify-between items-start gap-16">
      {/* Text Section */}
      <div className="w-1/3">
        <h1 className="text-5xl font-bold mb-4">Explore from Categories</h1>
        <p className="text-lg text-gray-600 mb-8 py-5">
          There are different types of plants all around us, and most of us recognize many kinds of plants that flower, grow in our gardens, or that we can eat. There is a vast range in the types of plants that grow in the world.
        </p>
        <button className="bg-green-500 text-white px-8 py-3  hover:bg-green-600 transition">
          See All
        </button>
      </div>

      {/* Images Section */}
      <div className="w-2/3 grid grid-cols-2 gap-8">
        <div className="relative">
          <img src={assets.hanging} alt="Hanging" className="rounded-lg object-cover w-48 h-48" />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">Hanging</span>
        </div>
        <div className="relative">
          <img src={assets.cactus} alt="Cactus" className="rounded-lg object-cover w-48 h-48" />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">Cactus</span>
        </div>
        <div className="relative">
          <img src={assets.indoor_plant} alt="Indoor Plant" className="rounded-lg object-cover w-48 h-48" />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">Indoor Plant</span>
        </div>
        <div className="relative">
          <img src={assets.outdoor_plant} alt="Outdoor Plant" className="rounded-lg object-cover w-48 h-48" />
          <span className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg">Outdoor Plant</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;