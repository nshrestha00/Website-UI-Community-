import { assets } from "../../assets/assets";

const Review = () => {
  return (
    <div className="bg-amber-50 text-black py-16 px-8">
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex space-x-6">
            <div>
              <img
                src={assets.boy}
                alt="Boy"
                className="w-64 h-80 object-cover rounded-lg shadow-lg border-2 border-gray-700"
              />
            <p className="mt-2 px-10 font-semibold">Jhon Doe, Student</p>
                 <div className=" px-10 flex items-center mt-4 space-x-1">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={assets.star} alt="Star" className="w-6 h-6" />
              ))}
            </div>
            </div> 
          </div>

          <div className="max-w-lg text-left">
            <p className="text-4xl font-serif mb-4">“</p>
            <p className="text-lg leading-relaxed">
             The Himalayan Java Coffee house had the best coffee around Pokhara. The shop is quiet, clean and has an outdoor sitting area to enjoy your coffee and people watch. The staff is friendly and very helpful. The muffins here are also very good
            </p>
         
            <p className="text-4xl font-serif mt-4 text-right">”</p>
          </div>
        </div>
    </div>
  );
};

export default Review;
