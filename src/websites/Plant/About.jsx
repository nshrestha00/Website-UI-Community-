import { assets } from "../../assets/assets"

const About = () => {
  return (
    <div id="plant-about" className="p-16 flex items-center justify-between">
      <div className="relative w-1/2 flex items-center justify-center">
        <div className="w-full max-h-[500px] overflow-hidden flex items-center justify-center">
          <img 
            src={assets.aloe_vera} 
            alt="Aloe vera" 
            className="h-auto w-auto max-h-full object-contain" 
          />
        </div>
      </div>
      
      <div className="w-1/2 pl-16 pr-8">
        <h1 className="text-5xl font-bold text-green-600 mb-8">
          Aloe Vera
        </h1>
        
        <p className="text-lg mb-12 text-gray-500">
          Aloe produces two substances, gel and latex, which are used for medicines. Aloe gel is the clear, jelly-like substance found in the inner part of the aloe plant leaf. Aloe latex comes from just under the plant's skin and is yellow in color. Some aloe products are made from the whole crushed leaf, so they contain both gel and latex.
        </p>

        <div className="flex gap-4">
          <button className="bg-green-500 text-white px-8 py-3 text-lg font-medium hover:bg-green-600 transition-colors">
            Buy Now
          </button>
          <button className="border border-black text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors">
            Explore Plants
          </button>
        </div>
      </div>
    </div>
  )
}

export default About;