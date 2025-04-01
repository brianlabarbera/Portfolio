import React from 'react'
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useMemo, useState } from "react"
import { loadSlim } from "@tsparticles/slim"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"
import ScrollBar from "./components/ScrollBar"
import Fade from "./components/Fade"

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
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: false,
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
          enable: false,
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
    <div className="relative min-h-screen w-screen">
      {init && (
        <Particles
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
      
      <ScrollBar />
      <Navbar />
      <div className="relative z-10">
        <section id="home" className="min-h-screen">
          <Fade>
            <Home />
          </Fade>
        </section>
        <section id="about" className="min-h-screen">
          <Fade delay={0.2}>
            <About />
          </Fade>
        </section>
        <section id="experience" className="min-h-screen">
          <Fade delay={0.3}>
            <Experience />
          </Fade>
        </section>
        <section id="projects" className="min-h-screen">
          <Fade delay={0.4}>
            <Projects />
          </Fade>
        </section>
      </div>
      
      <footer className="absolute bottom-0 left-0 w-full bg-#36454F text-white text-center font-bold py-4 z-20">
        © 2025 Brian LaBarbera
      </footer>
    </div>
  )
}

export default App