import { facilitiesData, trainers } from "../../assets/assets";

const Services = () => {
  return (
    <section id="fitness-services" className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Facilities Section */}
        <h2 className="text-3xl font-semibold mb-10">
          Our <span className="text-yellow-400">facilities</span>
        </h2>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-24 h-24 object-cover rounded-lg shadow-lg"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{facility.title}</h3>
                <p className="text-gray-300 text-sm">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trainers Section */}
        <h2 className="text-3xl font-semibold mt-16 mb-10">
          Meet Our <span className="text-yellow-400">Trainers</span>
        </h2>

        {/* Trainers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
          {trainers.map((trainer, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{trainer.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
