import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-6xl grid lg:grid-cols-2 gap-8">

        {/* Left Section - Text & Buttons */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Join The World <br /> Of Fitness.
          </h1>
          <p className="text-gray-300">
            Our aim is to bring more people into fitness so that every individual, family,
            society, and whole nation benefits.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold">
              Join Now
            </button>
            <button className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full">
                <img src={assets.playbutton} alt="Play Button" />
              </div>
              Watch Video
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 pt-6">
            <div className="text-center">
              <span className="text-yellow-400 text-3xl font-bold">7</span>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 text-3xl font-bold">25k+</span>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="text-center">
              <span className="text-yellow-400 text-3xl font-bold">95</span>
              <p className="text-gray-300">Gym Trainers</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={assets.p2}
            alt="Fitness Model"
            className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
