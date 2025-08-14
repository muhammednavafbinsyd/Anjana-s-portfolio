import React, { useState } from 'react';
import profileImage from "../images/image.png"; // replace with your image
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
    <div className="bg-[#f8f9ff] min-h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-medium text-gray-800 font-comfortaa">Anjana O</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 z-10 font-comfortaa">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-800 hover:text-yellow-500">
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-800" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-800 hover:text-yellow-500">
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
        {/* Left content */}
        <div className="max-w-lg">
          <p className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">
            Creative / Artist
          </p>
          <h1 className="text-5xl font-bold text-gray-900 mt-2 font-playfair">
            Hello, my name is <br />
            <span>Anjana O</span>
          </h1>
          <p className="text-gray-600 mt-4 font-poppins">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <a
              href="#projects"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-5 py-2 rounded font-roboto"
            >
              Projects
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 px-5 py-2 rounded hover:bg-gray-100 font-roboto"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right side with image & blob background */}
        <div className="relative bottom-25 left-38 mt-10 md:mt-0 w-full md:w-1/2 flex justify-center profile-pc">
          <div
            className="absolute top-0  right-0 w-[90%] h-[100%]"
          ></div>
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-[80%] object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
