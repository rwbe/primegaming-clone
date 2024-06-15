import React, { useState, useEffect } from 'react';
import FeaturedSection from './components/FeaturedSection';
import Contents from './components/Contents';
import Challenges from './components/Challenges';
import Mobile from './components/Mobile';
import PrimeGamingFooter from './components/Footer';
import Modal from './components/Modal'; // Importe o componente Modal

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Abra o modal quando a página recarregar
    setShowModal(true);
  }, []); 

  const renderMobileSections = () => (
    <>
      <Mobile />
    </>
  );

  const renderDesktopSections = () => (
    <>
      <FeaturedSection />
      <Challenges />
      <Contents />
    </>
  );

  return (
    <div className='bg-[#0B0418] h-full min-h-screen w-full'>
      {windowWidth <= 900 ? renderMobileSections() : renderDesktopSections()}
      <PrimeGamingFooter />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default App;
