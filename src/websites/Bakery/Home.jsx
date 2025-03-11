import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-serif">
      <div className="text-center my-12 md:my-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl italic font-normal mb-10">
          Enjoy fresh items of our<br />Grandma&apos;s Recipe
        </h1>
        
        <button className="bg-gray-800 text-white px-10 py-3 text-xl hover:bg-gray-700 transition-colors">
          See Menu
        </button>
        
        <p className="mt-5 text-gray-600">* 10% off on first order</p>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mt-12">
        {/* Left image - bread making */}
        <div className="col-span-1 rounded-md overflow-hidden bg-gray-50 h-64">
          <img 
            src={assets.breadMaking} 
            alt="Hand kneading dough" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="col-span-1 rounded-md overflow-hidden bg-gray-50 h-80">
          <img 
            src={assets.dessert} 
            alt="cake" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="col-span-1 rounded-md overflow-hidden bg-gray-50 h-64">
          <img 
            src={assets.croissantCoffee} 
            alt="Croissant and coffee" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;