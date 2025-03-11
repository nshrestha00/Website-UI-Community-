import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div id="paw-home" className="p-16 bg-cream flex items-center justify-between">
      <div className="relative w-1/2">
        <div className="w-full h-96 aspect-square rounded-full bg-orange-100 overflow-hidden flex items-center justify-center">
          <img 
            src={assets.dog} 
            alt="puppy" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
      
      <div className="w-1/2 pl-16 pr-8">
        <h1 className="text-5xl font-bold mb-8">
          Everybody Needs<br />
          A Friend In Life.
        </h1>
        
        <p className="text-xl mb-12">
          The Corgi is intelligent, quick and curious. It is a kind, adventurous breed which shows a large measure of independence. They are good with children and normally kind with strangers.
        </p>
        
        <button className="bg-yellow-600 text-white px-12 py-4 rounded-full text-xl font-medium hover:bg-yellow-700 transition-colors">
          Buy Me
        </button>
      </div>
    </div>
  );
};

export default Home;
