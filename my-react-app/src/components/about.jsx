import React, { useState } from "react";
import profileImg from "../images/Frame 3354.png";
import waveSvg from "../assets/shape1.svg";

export default function App() {

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwUFGI81TZ6CH5I4wRIf1aaOYSyPv4M-uzKZkWwzsqUQgdgPKwWsoEznNv77wY4k5Iq/exec", 
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" }); // clear form
      } else {
        alert("❌ Something went wrong: " + result.message);
      }
    } catch (error) {
      alert("⚠️ Error sending form. Please try again.");
    }
  };



  return (
    <div className="bg-[#f8f9ff] min-h-screen flex flex-col">
      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 font-playfair">About me</h2>
          <p className="text-gray-600 mb-4 font-poppins">
            Nisl arcu, scelerisque neque ut...
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-sm font-medium font-roboto">
            Resume
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="rounded-full overflow-hidden justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-80 h-80 object-cover rounded-full border-4 border-none"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 text-center flex-1">
        <h2 className="text-4xl font-bold mb-1 font-playfair">Contact me</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>

        {/* ✅ Direct form submit to Google Apps Script (no CORS issues) */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="Name"
        placeholder="Your Name"
        value={formData.Name}
        onChange={handleChange}
        required
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <input
        type="email"
        name="Email"
        placeholder="Your Email"
        value={formData.Email}
        onChange={handleChange}
        required
           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        value={formData.Message}
        onChange={handleChange}
        required
           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" 
      ></textarea>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-sm font-medium font-roboto"
      >
        Send
      </button>
    </form>
      </section>

      {/* Footer */}
      <footer className="relative mt-12">
        <img src={waveSvg} alt="Wave" className="w-full" />
      </footer>
    </div>
  );
}
