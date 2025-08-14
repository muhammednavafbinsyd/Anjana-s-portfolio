import React, { useState } from "react";
import profileImg from "../images/Frame 3354.png";
import waveSvg from "../assets/shape1.svg";

export default function App() {



const handleSubmit = async (e) => {
  e.preventDefault();
  const url = "https://script.google.com/macros/s/AKfycbxNVL4lteTFlCQdciemfKNPUsOLrOKLGN2t8fvjoKiy6X8-CQd1jyoDVHLULKEBFtJqzQ/exec";
  
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `Name=${encodeURIComponent(e.target.name.value)}&Email=${encodeURIComponent(e.target.email.value)}&Message=${encodeURIComponent(e.target.message.value)}`
  })
    .then(res => res.text())
    .then(data => {
      alert("Form submitted successfully!");
      console.log(data);
    })
    .catch(err => console.error("Error:", err));
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

        <form
          className="max-w-md mx-auto space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="name"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"     
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
