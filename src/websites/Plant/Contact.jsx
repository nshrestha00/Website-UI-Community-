import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <div
      id="plant-contact"
      className="p-8 flex items-center justify-between text-center max-w-8xl mx-auto"
      style={{
        backgroundImage: `url(${assets.leaf})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-2/3 mr-35 text-white">
        <h2 className="text-5xl font-bold mb-2">Garden Pokhara <br /> welcomes you!!</h2>
        <p className="text-black-600 mb-6 py-4">
          Receive 10% off on your purchase. <br />Redeem now!
        </p>
      </div>

      {/* Form Section */}
      <div className="w-2/3 text-left">
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email..."
            className="p-3 w-72 rounded-xl text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button className="bg-green-600 text-white px-8 py-3 text-xl font-medium hover:bg-green-700 transition-colors w-48 cursor-pointer">
            Claim Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
