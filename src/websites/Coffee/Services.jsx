import { coffser } from "../../assets/assets";

const Services = () => {
  return (
    <div id="coffee-services" className="p-16 bg-cream flex items-center justify-between">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-bold mb-8">
            Our Services
          </h1>
          <p className="text-xl mb-12">
            Himalayan Java offers its customers the best-tasting coffee beverages in the country. We have achieved this by using high-quality ingredients and strictly following preparation guidelines.
          </p>
          <button className="text-black border border-black  px-10 py-2 text-xl font-medium hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 text-center">
          {coffser.map((coff, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={coff.image} alt={coff.title} className="w-30 h-30 object-contain" />
              <h2 className="mt-2 font-bold text-lg">{coff.title}</h2>
              <p className="mt-2 text-gray-400 text-sm">{coff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
