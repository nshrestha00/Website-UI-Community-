import { find } from "../../assets/assets";

const FindUs = () => {
  return (
    <div id="coffee-findus" className="p-16 bg-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-8">Find Us</h2>
        <p className="text-xl mb-12">
          Himalayan Java outlets are available with the best coffee throughout the major cities of Nepal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {find.map((item, index) => (
          <div key={index} className="rounded-4xl shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={`FindUs ${index + 1}`}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <p className="text-center text-lg font-medium">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
