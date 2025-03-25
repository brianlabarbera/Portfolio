import React from 'react'
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import NodejsOriginal from 'devicons-react/lib/icons/NodejsOriginal';
import ExpressOriginal from 'devicons-react/lib/icons/ExpressOriginal';
import KotlinOriginal from 'devicons-react/lib/icons/KotlinOriginal';
import GradleOriginal from 'devicons-react/lib/icons/GradleOriginal';
import AndroidstudioOriginal from 'devicons-react/lib/icons/AndroidstudioOriginal';
import MysqlOriginal from 'devicons-react/lib/icons/MysqlOriginal';
import PostgresqlOriginal from 'devicons-react/lib/icons/PostgresqlOriginal';
import GitOriginal from 'devicons-react/lib/icons/GitOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/lib/icons/AmazonwebservicesOriginalWordmark';


const TechStack = () => {
    return (

      <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">🚀 My Stack</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">FRONTEND</h3>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <JavascriptOriginal size={40} />
            <p className="text-lg mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <ReactOriginal size={40} />
            <p className="text-lg mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <TailwindcssOriginal size={40} />
            <p className="text-lg mt-2">Tailwind CSS</p>
          </div>
        </div>
      </section>
    
      <section className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">BACKEND</h3>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <NodejsOriginal size={40} />
            <p className="text-lg mt-2">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <ExpressOriginal size={40} />
            <p className="text-lg mt-2">Express.js</p>
          </div>
        </div>
      </section>
    
      <section className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">MOBILE</h3>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <KotlinOriginal size={40} />
            <p className="text-lg mt-2">Kotlin</p>
          </div>
          <div className="flex flex-col items-center">
            <GradleOriginal size={40} />
            <p className="text-lg mt-2">Gradle</p>
          </div>
          <div className="flex flex-col items-center">
            <AndroidstudioOriginal size={40} />
            <p className="text-lg mt-2">Android Studio</p>
          </div>
        </div>
      </section>
    
      <section className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">DATABASE</h3>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <MysqlOriginal size={40} />
            <p className="text-lg mt-2">MySQL</p>
          </div>
          <div className="flex flex-col items-center">
            <PostgresqlOriginal size={40} />
            <p className="text-lg mt-2">PostgreSQL</p>
          </div>
        </div>
      </section>
    
      <section className="mb-6">
        <h3 className="text-xl font-bold text-white mb-3 text-center">TOOLS</h3>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="flex flex-col items-center">
            <GitOriginal size={40} />
            <p className="text-lg mt-2">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <AmazonwebservicesOriginalWordmark size={40} />
            <p className="text-lg mt-2">AWS</p>
          </div>
        </div>
      </section>
    </div>
     )
}

export default TechStack