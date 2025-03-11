import { blogData } from "../../assets/assets";

const Blog = () => {
  return (
    <div id="paw-blog" className="p-16 bg-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Blog Section</h2>
        <p className="text-lg text-black-600 mb-8">
          Description of blog
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogData.map((item, index) => (
          <div key={index} className="rounded-2xl shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={`Blog ${index + 1}`}
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

export default Blog;
