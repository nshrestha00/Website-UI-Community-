import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div id="coffee-about" className="p-16 bg-cream flex items-center justify-between">
      
      {/* Text Section */}
      <div className="w-1/2 pr-16 ml-4">
        <h1 className="text-5xl font-bold mb-8 text-amber-900">
          From Crop To Cup
        </h1>

        <p className="text-xl mb-12">
            Himalayan Java Coffee Beans are grown locally and are roasted to prefection in the ideal Himalayan air. It is then packaged immediately and rushed off to our outletswhich ensures we deliver the best coffee experience possible for all of our customers.
        </p>

        <button className="bg-amber-900 text-white px-12 py-4  text-xl font-medium hover:bg-amber-700 transition-colors">
          See Menu
        </button>
      </div>

      {/* Image Section */}
      <div className="w-1/2 pl-8">
        <div className="w-full h-96 bg-orange-100 overflow-hidden">
          <img 
            src={assets.coffee} 
            alt="coffee" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

    </div>
  );
};

export default About;
