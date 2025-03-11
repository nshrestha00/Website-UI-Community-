import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <div className="p-8 bg-orange-50 flex items-center justify-between text-center rounded-4xl max-w-6xl mx-auto">
      {/* Image Section */}
      <div className="w-1/3 mr-35">
        <img
          src={assets.puppy}
          alt="Puppy"
          className="w-full h-auto rounded-4xl"
        />
      </div>

      {/* Text and Form Section */}
      <div className="w-2/3 text-left">
        <h2 className="text-3xl font-bold mb-2">Get Pawsome News!</h2>
        <p className="text-black-600 mb-6">
          Exclusive training tips, tricks, product deals, and more.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter email..."
            className="p-3 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-full text-xl font-medium hover:bg-yellow-700 transition-colors w-48 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
