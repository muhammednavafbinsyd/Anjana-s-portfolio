import React from 'react'
import profileImage from "../images/image.png"; // replace with your image path
function home() {
 return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-1"
    >
      {/* Left Side - Text */}
      <div className="max-w-lg">
        <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">
          Creative / Artist
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Hello, my name is <br />
          <span className="text-gray-900">Anjana O</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <a
            href="#projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded"
          >
            Projects
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-800 px-5 py-2 rounded hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Side - Image with Yellow Background */}
      <div >
        {/* Profile image */}
        <img
          src={profileImage}
          alt="Anjana O"
          className=""
        />
      </div>
    </section>
  );
}

export default home