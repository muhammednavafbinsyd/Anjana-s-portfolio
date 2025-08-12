import React from "react";
import profileImg from "../images/Frame 3354.png"; // replace with your image
import waveSvg from "../assets/shape1.svg"; // yellow wave background

export default function App() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen flex flex-col">
      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="text-gray-600 mb-4">
            Nisl arcu, scelerisque neque ut. Tincidunt amet, tempor duis tortor
            neque auctor dis ipsum. Pretium cras amet odio amet eleifend id sed
            cras sed. Aliquet risus posuere aliquet imperdiet sit.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-sm font-medium">
            Resume
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden bg-yellow-400 flex items-center justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-56 h-56 object-cover rounded-full border-4 border-yellow-400"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 text-center flex-1">
        <h2 className="text-2xl font-bold mb-1">Projects</h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
        
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded text-sm font-medium"
          >
            Send
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="relative mt-12">
        <img src={waveSvg} alt="Wave" className="w-full" />
        <div className="bg-yellow-400 text-center py-4 -mt-1">
          <div className="flex justify-center gap-4 mb-2">
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/linkedin.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/24/000000/email.png" alt="Email" /></a>
          </div>
          <p className="text-sm">Made by Muhammed Nawaf © 2025</p>
        </div>
      </footer>
    </div>
  );
}
