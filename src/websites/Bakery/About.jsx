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

      {/* Reviews Component */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Reviews from Customers</h2>
        <div className="relative max-w-4xl mx-auto">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <img 
              src={assets.left_arrow} 
              alt="Previous review" 
              className="w-10 h-10 opacity-70 hover:opacity-100"
            />
          </button>
          
          <div className="flex items-center gap-10 px-16">
            <div className="w-40 h-40 flex-shrink-0">
              <img 
                src={assets.girl}
                alt="Customer" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
              <p className="text-xl mb-6">
                This place is great. They have so many baked goods it will blow your mind. They have everything from large cakes to cupcakes to donuts to pastries to breads to cookies. The price is also fair.
              </p>
              <div>
                <h3 className="text-2xl font-bold">Aisha Pun,</h3>
                <p className="text-xl">Student</p>
              </div>
            </div>
          </div>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <img 
              src={assets.right_arrow} 
              alt="Next review" 
              className="w-10 h-10 opacity-70 hover:opacity-100"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;