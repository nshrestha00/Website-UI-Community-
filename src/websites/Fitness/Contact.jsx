import { useState } from 'react';
import { assets } from '../../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone number, only allow digits
    if (name === 'phoneNumber' && !/^\d*$/.test(value)) {
      return; // Don't update state if non-numeric characters are entered
    }
    
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ fullName: '', phoneNumber: '' });
    alert('Thanks for joining! We will get back to you soon.');
  };

  return (
    <section id='fitness-contact' className="bg-black text-white py-16 px-8">
    <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mt-16 mb-10">
          What&apos;s <span className="text-yellow-400">Stopping</span> you?
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-80 md:h-auto">
          <img 
            src={assets.p1}
            alt="Fitness Image" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Right side - Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white text-black">
          <div className="max-w-md w-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Become a part of our family
            </h3>
            
            <p className="text-lg mb-8">
              Leave your details and we will get back to you!
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              
              <div className="mb-8">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold rounded-full py-4 px-12 hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;