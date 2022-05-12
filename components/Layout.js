import React from 'react';
import Footer from './Footer';
const Layout = ({ children }) => {
  return (
    <>
      <main className='mt-10 w-2/3 mx-auto'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
