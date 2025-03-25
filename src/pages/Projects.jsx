import React, { useState } from 'react';

const Projects = () => {
  const projectsData = [
    {
      id: "01",
      title: "FiveGuys",
      description: "Full-Stack imitation Five Guys website that enables users to browse, add to cart, and purchase items. Includes a PostgreSQL database to efficiently manage users, products, and transactions.",
      technologies: ["React", "Express.js", "PostgreSQL"],
      screenshots: [""],
      githubUrl: "https://github.com/brianlabarbera/E-CommerceSite"
    },
    {
      id: "02",
      title: "DigitalGameDeals",
      description: "Android app that allows users to track digital video game prices from multiple online storefronts. Integrated a REST API to display 10,000+ games, updating prices in real time.",
      technologies: ["Kotlin", "Gradle", "Android Studio"],
      screenshots: [""],
      githubUrl: "https://github.com/brianlabarbera/digitalGameDeals"
    },

  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const openProject = (project, index) => {
    setSelectedProject(project);
    setActiveIndex(index);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setActiveIndex(null);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white py-20 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-12 text-center">Personal Projects</h1>
        
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              onClick={() => openProject(project, index)}
              className={`
                border-t border-gray-700 pt-6 cursor-pointer transition-all 
                ${activeIndex === index ? 'opacity-100' : 'hover:opacity-80'}
                group
              `}
            >
              <div className="flex items-start">
                <div className="text-xl text-gray-500 mr-4 font-medium">{project.id}.</div>
                <div className="w-full">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-gray-400 text-sm bg-gray-800 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-gray-900 rounded-lg max-w-3xl w-full my-8">
              <div className="p-6 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-gray-500 block mb-1">{selectedProject.id}.</span>
                    <h2 className="text-2xl md:text-3xl font-bold">{selectedProject.title}</h2>
                  </div>
                  <button 
                    onClick={closeProject}
                    className="text-gray-400 hover:text-white ml-4"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="aspect-video bg-gray-800 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.screenshots[0]} 
                    alt={`${selectedProject.title} screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-gray-400 bg-gray-800 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white hover:bg-white hover:text-black rounded-md font-medium transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;