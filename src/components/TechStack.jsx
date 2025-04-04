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
import Fade from './Fade';

const TechStack = () => {
    return (
      <div className="max-w-4xl mx-auto px-4">
        <Fade direction="down" delay={0.2}>
          <h2 className="text-3xl font-bold mb-6 text-center">⚙️ My Stack</h2>
        </Fade>
        
        <Fade direction="up" delay={0.4}>
          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">FRONTEND</h3>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <IconWithFade icon={<JavascriptOriginal size={40} />} name="JavaScript" delay={0.1} />
              <IconWithFade icon={<ReactOriginal size={40} />} name="React" delay={0.2} />
              <IconWithFade icon={<TailwindcssOriginal size={40} />} name="Tailwind CSS" delay={0.3} />
            </div>
          </section>
        </Fade>
      
        <Fade direction="up" delay={0.6}>
          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">BACKEND</h3>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <IconWithFade icon={<NodejsOriginal size={40} />} name="Node.js" delay={0.1} />
              <IconWithFade icon={<ExpressOriginal size={40} />} name="Express.js" delay={0.2} />
            </div>
          </section>
        </Fade>
      
        <Fade direction="up" delay={0.8}>
          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">MOBILE</h3>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <IconWithFade icon={<KotlinOriginal size={40} />} name="Kotlin" delay={0.1} />
              <IconWithFade icon={<GradleOriginal size={40} />} name="Gradle" delay={0.2} />
              <IconWithFade icon={<AndroidstudioOriginal size={40} />} name="Android Studio" delay={0.3} />
            </div>
          </section>
        </Fade>
      
        <Fade direction="up" delay={1.0}>
          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">DATABASE</h3>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <IconWithFade icon={<MysqlOriginal size={40} />} name="MySQL" delay={0.1} />
              <IconWithFade icon={<PostgresqlOriginal size={40} />} name="PostgreSQL" delay={0.2} />
            </div>
          </section>
        </Fade>
      
        <Fade direction="up" delay={1.2}>
          <section className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3 text-center">TOOLS</h3>
            <div className="flex flex-wrap justify-center items-center gap-5">
              <IconWithFade icon={<GitOriginal size={40} />} name="Git" delay={0.1} />
              <IconWithFade icon={<AmazonwebservicesOriginalWordmark size={40} />} name="AWS" delay={0.2} />
            </div>
          </section>
        </Fade>
      </div>
    )
}

const IconWithFade = ({ icon, name, delay = 0 }) => (
  <Fade direction="up" delay={delay}>
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-lg mt-2">{name}</p>
    </div>
  </Fade>
);

export default TechStack