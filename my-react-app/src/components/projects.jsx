import React from "react";
import project1 from "../images/pexels-elly-fairytale-3823207 1.png"; // replace with your images
import project2 from "../images/Rectangle 7.png";
import project3 from "../images/Rectangle 8.png";

export default function Projects() {
  const projects = [
    {
      name: "Project Name",
      description:
        "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
      image: project1,
    },
    {
      name: "Project Name",
      description:
        "What was your role, your deliverables, if the project was personal, freelancing.",
      image: project2,
    },
    {
      name: "Project Name",
      description:
        "You can also add in this description the type of the project, if it was for web, mobile, electron.",
      image: project3,
    },
  ];

  return (
    <section id="projects" className="px-4 md:px-28 py-28 bg-[#f8f9ff] ">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 font-playfair">Projects</h2>
        <div className="w-16 h-1 mx-auto mt-2"></div>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
      </div>

      {/* Project Cards */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center justify-between ${
              index % 2 !== 1 ? "md:flex-row-reverse" : ""
            } bg-white shadow-md rounded-2xl overflow-hidden`}
          >
            {/* Image */}
            <div className="md:max-w-2xl">
              <img
                src={project.image}
                alt={project.name}
                className="w-2xl h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-2xl p-6 flex-col justify-center">
              <h3 className="text-xl font-semibold mb-4 font-playfair">{project.name}</h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <a
                href="#"
                className="inline-block border  border-gray-800 px-5 py-2 rounded-4xl hover:bg-gray-100 transition font-roboto"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
