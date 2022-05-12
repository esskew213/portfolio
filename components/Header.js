import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { boxShadow } from 'tailwindcss/defaultTheme';

const Header = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const subHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='relative my-16 sm:my-20'>
      <motion.h1
        initial='hidden'
        animate='visible'
        variants={variants}
        className=' text-5xl sm:text-6xl mb-4 text-white w-fit'
        transition={{ duration: 2 }}
      >
        Hi, I'm Sarah.
      </motion.h1>
      <div className='flex justify-between items-start md:items-center'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={subHeaderVariants}
          transition={{ duration: 2, delay: 0 }}
          className='text-white'
        >
          <p>
            An aspiring full-stack software engineer proficient in Javascript,
            React, Express, Next.js, PostgreSQL and MongoDB. I&apos;m passionate
            about beautiful design, committed to writing robust, maintainable
            code, and always ready to learn something new to make my next
            project better than the last!
          </p>
          <br />
          <p>
            Check out some of my projects below, or get in touch with me on{' '}
            <a
              href='https://github.com/esskew213'
              className='underline font-semibold'
            >
              Github
            </a>{' '}
            or{' '}
            <a
              href='https://linkedin.com/in/sarah-quek-tw/'
              className='underline font-semibold'
            >
              LinkedIn
            </a>
            .
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 2 } }}
          whileHover={{ scale: 1.1, boxShadow: '0 0 10px white' }}
          className='hidden sm:block shrink-0 ml-4 overflow-hidden border-8 border-r-white rounded-full w-40 h-40'
        >
          <Image
            src={'/images/sarah_profile_pic_crop.jpg'}
            alt='profile photo'
            width={500}
            height={500}
            title="Sarah's profile photo"
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
