import React from 'react'

const experiences = [
 {
    company: "Art Beyond Sight",
    role: "Software Developer Intern",
    duration: "Jul 2024 - Aug 2024",
 },
 {
    company: "Serena's Catering Hall",
    role: "Software Developer Intern",
    duration: "Apr 2024 - Jun 2024",
 },
 {
    company: "Trust Fund Registry",
    role: "Software Developer Intern",
    duration: "Jul 2023 - Aug 2023",
 }
]

const Experience = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-white px-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8 text-center">✨ My Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 text-center"
            >
              <h3 className="text-lg text-gray-300 mb-2">{exp.company}</h3>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">{exp.role}</h2>
              <p className="text-gray-400">{exp.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience