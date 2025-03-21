import React from 'react'
import Home from "./components/Home";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="snap-start">
        <Home />
      </section>
      <section className="h-screen w-full bg-gray-900 flex items-center justify-center text-white snap-start">
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>
      <section className="h-screen w-full bg-gray-800 flex items-center justify-center text-white snap-start">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <section className="h-screen w-full bg-gray-700 flex items-center justify-center text-white snap-start">
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </section>
    </div>
  )
}

export default App
