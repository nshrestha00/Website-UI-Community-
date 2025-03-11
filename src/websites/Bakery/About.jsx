import { assets } from "../../assets/assets";

const About = () => {
  return (
    <div className="p-16 bg-cream mt-16">
      <div className="flex items-center gap-16">
        <img src={assets.b1} alt="Grandma's Bakery" className="w-1/2 h-auto rounded-xl object-cover" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Grandma’s Bakery</h2>
          <p className="text-gray-500 text-base mb-6 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, corrupti tenetur adipisci ratione eos, et labore perspiciatis quisquam nulla autem nisi, incidunt delectus!
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;