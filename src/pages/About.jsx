import React from 'react'
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';

const About = () => {

    return (

    <div className="h-screen w-full flex items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-6">🚀 My Stack</h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3">FRONTEND</h3>
        <div className="flex flex-wrap gap-5">
          <ReactOriginal size={40} />
          <p className="text-2xl">React</p>
          </div>
        </div>
    </div>
 )
}

export default About