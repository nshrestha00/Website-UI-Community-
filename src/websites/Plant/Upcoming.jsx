import { plants } from "../../assets/assets"

const Upcoming = () => {
  return (
    <div id="plant-upcoming" className="p-16">
    <h1 className="text-5xl font-bold text-center mb-16">
      Upcoming Plants
    </h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {plants.map((plant, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-gray-50 rounded-lg overflow-hidden w-full">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-64 object-cover"
            />
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-center">{plant.name}</h3>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Upcoming