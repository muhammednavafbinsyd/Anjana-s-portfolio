import React, { useState } from 'react';
import profileImage from "../images/image.png"; // use your exact screenshot image here
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contacts", href: "#contacts" },
  ];

  return (
<div className='bg-[#f8f9ff]' style={{backgroundImage: ` url(${profileImage})`}}>
      {/* Navbar */}
      <div className="flex">
        {/* Left section */}
        <div className="flex items-center px-6 py-4 flex-1">
          <h1 className="text-lg font-medium text-gray-800">Anjana O</h1>
        </div>

        {/* Right section (desktop) */}
        <div className="hidden md:flex items-center px-8 py-4 space-x-10">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <div className="md:hidden flex items-center px-6 py-4">
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
        <div className="md:hidden px-6 py-4 space-y-4">
          {navigation.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="bg-[#f8f9ff] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10"
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

      </section>
    </div>
  );
}

export default Home;
