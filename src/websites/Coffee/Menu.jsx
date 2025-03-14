import { menu } from "../../assets/assets";

const Menu = () => {
  return (
    <div id="coffee-menu" className="p-16 bg-white">
      <div className="text-center">
      <h1 className="text-5xl font-bold mb-8">Menu</h1>
      <p className="text-xl mb-12">
        While most of the food in our menu changes from kitchen to kitchen and <br/> from cook to cook, what remains the same is our product from the bakery.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-beige p-6 rounded-lg">
        {menu.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;