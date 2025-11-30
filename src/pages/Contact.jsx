import React, { useState } from 'react'

const Contact = () => {
    
  const [error, setError] = useState("");
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
        setError("All fields are required.");
        return;
        }
        setError("");
        console.log("Form submitted:", formData);

   
        setFormData({ name: "", email: "", message: "" });
    };
  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full grid md:grid-cols-2">
        
        {/* Left Side - Contact Info */}
        <div className="bg-cyan-950 text-white p-8 rounded-l-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            We'd love to hear from you! Fill out the form and we'll get back to you soon.
          </p>
          <div className="space-y-4">
            <p><strong>📍 Address:</strong> 123 Dhaka city, bangladesh</p>
            <p><strong>📞 Phone:</strong> +1 888 467 999</p>
            <p><strong>✉ Email:</strong> contact@please.com</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form  className="p-8">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full bg-cyan-950 text-white py-3 rounded-lg  hover:scale-105  transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
