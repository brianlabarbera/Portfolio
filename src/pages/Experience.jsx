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
        
        <div className="h-screen w-full flex items-center justify-center text-white">
            <div className="w-full max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">✨ MY EXPERIENCE</h2>
        {experiences.map((exp, index) => (
          <div key={index} className={`mb-6 ${exp.faded ? "opacity-50" : ""}`}>
            <h3 className="text-lg">{exp.company}</h3>
            <h2 className="text-3xl font-extrabold">{exp.role}</h2>
            <p className="text-gray-400">{exp.duration}</p>
          </div>
        ))}
      </div>
        </div>
        
 )
}

export default Experience