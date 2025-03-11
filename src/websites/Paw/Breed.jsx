import { breed } from "../../assets/assets"

const Breed = () => {
  return (
    <div id="paw-breed" className="p-16 mt-2">
    <h2 className="text-4xl font-bold text-center mb-4">Dog Breed</h2>
    <p className="text-center text-black-500 text-base mb-8 max-w-xl mx-auto">
        Find yourself a perfect friend from wide variety of choices.
      </p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap- justify-center">
              {breed.map((breed, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-32 h-32 object-cover rounded-full shadow-lg"
                  />
                  <h3 className="mt-2 text-lg font-semibold">{breed.name}</h3>
                </div>
              ))}
    </div>
</div>
   
  )
}

export default Breed