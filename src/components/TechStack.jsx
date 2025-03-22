import React from 'react'
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';


const TechStack = () => {
    return (

        <div>
          <h2 className="text-3xl font-bold mb-6">🚀 My Stack</h2>

          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">FRONTEND</h3>
            <div className="flex flex-wrap gap-5">
               <JavascriptOriginal size={40} />
               <p className="text-2xl">JavaScript</p>
              <ReactOriginal size={40} />
              <p className="text-2xl">React</p>
              <TailwindcssOriginal size={40} />
               <p className="text-2xl">Tailwind CSS</p>
              </div>
            </section>

            <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">BACKEND</h3>
            <div className="flex flex-wrap gap-5">
            <NodejsOriginal size={40} />
            <p className="text-2xl">Node.js</p>
            </div>
            </section>

            <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">DATABASE</h3>
            <div className="flex flex-wrap gap-5">

            </div>
            </section>

            <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">TOOLS</h3>
            <div className="flex flex-wrap gap-5">
            <GitOriginal size={40} />
            <p className="text-2xl">Git</p>
            <AmazonwebservicesOriginalWordmark size={40} />
            <p className="text-2xl">AWS</p>
            </div>
            </section>


        </div>
     )
}

export default TechStack