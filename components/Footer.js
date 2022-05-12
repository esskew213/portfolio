import React from 'react';

const Footer = () => {
  return (
    <footer className='text-white text-center text-sm p-4'>
      &copy; Sarah Quek 2022. A portfolio site powered by{' '}
      <a href='https://nextjs.org' className='underline font-semibold'>
        Next.js
      </a>
      ,{' '}
      <a href='https://tailwindcss.com/' className='underline font-semibold'>
        Tailwind CSS
      </a>{' '}
      and{' '}
      <a
        className='underline font-semibold'
        href='https://www.framer.com/motion/'
      >
        Framer Motion
      </a>
      .
    </footer>
  );
};

export default Footer;
