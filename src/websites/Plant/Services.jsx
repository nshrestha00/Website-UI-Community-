import { plantServices } from "../../assets/assets";

const Services = () => {
  return (
    <div id="plant-services" className="p-16 bg-cream">
      <h1 className="text-5xl font-bold text-center mb-16">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {plantServices.map((plant, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-green-100 p-6 rounded-xl mb-4">
              <img src={plant.image} alt={plant.title} className="w-16 h-16 object-contain" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{plant.title}</h2>
            <p className="text-gray-500 text-base">{plant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
