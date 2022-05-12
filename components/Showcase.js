import React from 'react';
import { motion } from 'framer-motion';
const Showcase = ({ title, description, link }) => {
  const container = {
    visible: {
      opacity: 1,
      x: [-50, 10, 0],
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.8, 1],
        delay: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: -50,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const child = {
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeInOut' } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      className=' bg-white p-4 rounded-lg mb-8 drop-shadow-lg'
      initial='hidden'
      whileInView='visible'
      whileHover={{
        translateY: -5,
        scale: 1.03,
        boxShadow: '0 0 10px #1e293b',
      }}
      whileTap={{ scale: 0.97 }}
      variants={container}
      viewport={{ margin: '50px' }}
    >
      <a href={link}>
        <motion.h3 className='font-black text-2xl' variants={child}>
          {title}
        </motion.h3>
        <motion.p className='' variants={child}>
          {description}
        </motion.p>
      </a>
    </motion.div>
  );
};

export default Showcase;
