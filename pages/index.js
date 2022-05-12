import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Showcase from '../components/Showcase';
import portfolio from '../components/descriptions';
import Skills from '../components/Skills';
export default function Home() {
  const variants = {
    hide: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: [-50, 10, 0],
      transition: { duration: 2, delay: 4, times: [0, 0.8, 1] },
    },
  };
  const asideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: [50, -10, 0],
      transition: { duration: 2, delay: 4, times: [0, 0.8, 1] },
    },
  };
  return (
    <>
      <Header />
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2'>
        <motion.div
          initial='hide'
          animate='show'
          variants={variants}
          className='col-span-2 mx-auto'
        >
          <h4 className='text-xl font-bold tracking-wider text-white mb-4'>
            CODING PROJECTS
          </h4>
          {portfolio.map((d, idx) => {
            return (
              <Showcase
                key={idx}
                title={d.title}
                description={d.description}
                link={d.link}
              />
            );
          })}
        </motion.div>
        <motion.div
          initial='hidden'
          variants={asideVariants}
          animate='visible'
          className='hidden sm:block sm:col-span-1'
        >
          <h5 className='text-xl font-bold tracking-wider text-white mb-4 text-right'>
            SKILLS
          </h5>
          <Skills
            skills={[
              'Javascript',
              'HTML',
              'CSS',
              'React',
              'Express',
              'Next.js',
              'MongoDB',
              'PostgreSQL',
              'Python',
              'FastAPI',
              'Tailwind CSS',
              'Material UI',
              'RESTful APIs',
            ]}
          />
        </motion.div>
      </div>
    </>
  );
}
