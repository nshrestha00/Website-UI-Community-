import { assets } from "../../assets/assets";

const Review = () => {
  return (
    <section id="fitness-review" className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Stories of our <span className="text-yellow-400">Vyayamshala</span> Family
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
          {/* Before & After Images (Left Side) */}
          <div className="flex space-x-6">
            <div>
              <img
                src={assets.before}
                alt="Before"
                className="w-64 h-80 object-cover rounded-lg shadow-lg border-2 border-gray-700"
              />
              <p className="text-sm text-gray-300 mt-2 text-center">Before</p>
            </div>
            <div>
              <img
                src={assets.after}
                alt="After"
                className="w-64 h-80 object-cover rounded-lg shadow-lg border-2 border-gray-700"
              />
              <p className="text-sm text-gray-300 mt-2 text-center">After</p>
            </div>
          </div>

          {/* Review Content (Right Side) */}
          <div className="max-w-lg text-left">
            <p className="text-4xl font-serif mb-4">“</p>
            <p className="text-lg leading-relaxed">
              A complete package for all fitness enthusiasts! Join Vyayamshala and challenge yourself.
              The gym's layout, environment, and supportive community play a crucial role in pushing
              beyond limits and achieving goals.
            </p>
            <div className="flex items-center mt-4 space-x-1">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={assets.star} alt="Star" className="w-6 h-6" />
              ))}
            </div>
            <p className="mt-2 font-semibold">Jhon Doe, Student</p>
            <p className="text-4xl font-serif mt-4 text-right">”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
