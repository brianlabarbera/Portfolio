
import React from 'react'
import Fade from '../components/Fade'

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center text-white px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Fade direction="down" delay={0.3}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">
            <span className="text-purple-400">SOFTWARE</span>
          </h1>
        </Fade>
        
        <Fade direction="down" delay={0.6}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            DEVELOPER
          </h2>
        </Fade>
        
        <Fade delay={0.9}>
          <p className="text-base md:text-lg mb-4 max-w-xl mx-auto">
            Hi! I'm <span className="font-bold">Brian</span>. A creative Software Developer with 6+ months of professional experience in building high-performance and responsive applications.
          </p>
        </Fade>
        
        <Fade delay={1.2}>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            I'm actively seeking opportunities to leverage my technical expertise while expanding my professional experience in the field.
          </p>
        </Fade>
      </div>
    </div>
  )
}

export default Home