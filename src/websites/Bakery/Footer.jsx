import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Team</li>
            <li>FAQs</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Lakeside 15th street</p>
          <p>Pokhara, Nepal</p>
          <p>+977-[0]61-467701</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.845434183273!2d83.98557641453613!3d28.20959428260266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595d5b1247f8f%3A0x946aef3b5ebc3b0c!2sLakeside%2C%20Pokhara%2033700%2C%20Nepal!5e0!3m2!1sen!2snp!4v1614326802456!5m2!1sen!2snp"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center border-t border-gray-700 pt-4 space-x-4">
      <div className="text-gray-500 text-sm">
      Copyright &copy; 2021 GrandmaBakery
      </div>
          <img src={assets.facebook} alt="Facebook" className="w-6 h-6" />
          <img src={assets.youtube} alt="YouTube" className="w-6 h-6" />
          <img src={assets.instagram} alt="Instagram" className="w-6 h-6" />
      </div>
    
    </footer>
  );
};

export default Footer;
