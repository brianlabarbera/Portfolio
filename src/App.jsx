import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"

const App = () => {

const [init, setInit] = useState(false);
useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  }).then(() => {
    setInit(true);
  });
}, []);

const particlesLoaded = (container) => {
  console.log(container);
};


const options = useMemo(
  () => ({
    background: {
      color: {
        value: "#36454F",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: "#FFFFFF",
      },
      links: {
        color: "#FFFFFF",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 150,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }),
  [],
);


  return (
    
    <div className="h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory relative">

      <Navbar />

      {init && (
      <Particles
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
      />
    )}
    
      <section id="home" className="snap-start relative z-10">
        <Home />
      </section>
      <section id="about" className="snap-start relative z-10">
        <About />
      </section>
      <section id="experience" className="snap-start relative z-10">
        <Experience />
      </section>
      <section id="projects" className="snap-start relative z-10">
        <Projects />
      </section>
    </div>
  )
}

export default App
