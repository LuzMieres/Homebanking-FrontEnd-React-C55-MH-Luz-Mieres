import React, { useState } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import '../styles/style.css';
import Footer from '../components/Footer';

function MainLayout() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header showNav={showNav} toggleNav={() => setShowNav(!showNav)} />
      <div className="flex w-full relative flex-grow">
        <Nav showNav={showNav} toggleNav={() => setShowNav(!showNav)} />
        <div className="flex-grow">
          <Outlet className='main min-h-[80vh] flex flex-wrap'/>
        </div>
      </div>
      <Footer className="w-full" />
    </div>
  );
}

export default MainLayout;