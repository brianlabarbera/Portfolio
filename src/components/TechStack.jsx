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
            <ExpressOriginal size={40} />
            <p className="text-2xl">Express.js</p>
            </div>
            </section>

            <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">MOBILE</h3>
            <div className="flex flex-wrap gap-5">
            <KotlinOriginal size={40} />
            <p className="text-2xl">Kotlin</p>
            <GradleOriginal size={40} />
            <p className="text-2xl">Gradle</p>
            <AndroidstudioOriginal size={40} />
            <p className="text-2xl">Android Studio</p>
            </div>
            </section>

            <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">DATABASE</h3>
            <div className="flex flex-wrap gap-5">
            <MysqlOriginal size={40} />
            <p className="text-2xl">MySQL</p>
            <PostgresqlOriginal size={40} />
            <p className="text-2xl">PostgreSQL</p>
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