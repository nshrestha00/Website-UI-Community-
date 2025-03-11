import { assets } from "../../assets/assets";

const Accessories = () => {
  return (
    <div id="paw-accessories" className="p-16 bg-white flex justify-between items-start">
      {/* Text Section */}
      <div className="w-1/3">
        <h2 className="text-4xl font-bold mb-4">Pet Products</h2>
        <p className="text-lg text-gray-600 mb-8">
          All products are designed for ease of use and durability, as well as looking good. 
          You can choose your own colours to make your item unique.
        </p>

        <button className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-md hover:bg-orange-600 transition">
          See more
        </button>
      </div>

      {/* Images Section */}
      <div className="w-2/3 grid grid-cols-3 gap-6">
        <img src={assets.pro1} alt="Product 1" className="rounded-lg object-cover w-full h-48 aspect-square" />
        <img src={assets.pro2} alt="Product 2" className="rounded-lg object-cover w-full h-48 aspect-square" />
        <img src={assets.pro3} alt="Product 3" className="rounded-lg object-cover w-full h-48 aspect-square" />
        <img src={assets.pro4} alt="Product 4" className="rounded-lg object-cover w-full h-48 aspect-square" />
        <img src={assets.pro5} alt="Product 5" className="rounded-lg object-cover w-full h-48 aspect-square" />
        <img src={assets.pro6} alt="Product 6" className="rounded-lg object-cover w-full h-48 aspect-square" />
      </div>
    </div>
  );
};

export default Accessories;
