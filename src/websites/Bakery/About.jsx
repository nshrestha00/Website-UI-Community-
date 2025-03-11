import { items } from "../../assets/assets";

const About = () => {
  return (
    <div id="bakery-about" className="p-16 bg-cream mt-16">
    <h2 className="text-3xl font-bold text-center mb-4">What we offer</h2>
    <p className="text-center text-black-500 text-base mb-8 max-w-xl mx-auto">
        Introducing you a wide variety of bakery items with unique taste and the creamiest of cakes in the city.
      </p>
    <div className="flex justify-center space-x-20">
      {items.map((item) => (
        <div key={item.name} className="flex flex-col items-center">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-28 h-40 rounded-full object-cover mb-2" 
          />
          <span className="text-lg font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
  );
};


export default About