import { services } from "../../assets/assets";

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          {/* <h2 className="text-yellow-400 text-lg font-bold">Services</h2> */}
          <h1 className="text-4xl font-bold mt-2">
            We provide service that fits the best for you.
          </h1>
          <p className="mt-4 text-gray-300">
            Strive for greatness with the best, around the best, and in the best
            fitness environment available in the city.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200">
            See All
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="p-6 rounded-full bg-gray-800 shadow-lg flex items-center justify-center">
                <img src={service.icon} alt={service.name} className="w-16 h-16 object-contain" />
              </div>
              <p className="mt-2 text-lg">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
