import { useEffect, useState } from 'react';
import LogoSVG from '../assets/svg/Logo.svg';
import UserMenu from '../components/UserMenu.jsx';
import featuredContent from '../data/featuredContent.json';

const FeaturedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const handleLogoClick = () => {
    // Lógica para ação ao clicar na logo
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
      setWidth(0);
    }, 5000);
  
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let animationId;

    const updateWidth = (startTimestamp) => {
      const elapsed = Date.now() - startTimestamp;
      const progress = (elapsed / 5000) * 100;

      if (progress <= 100) {
        setWidth(progress);
        animationId = requestAnimationFrame(() => updateWidth(startTimestamp));
      } else {
        setWidth(0);
        setActiveIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
      }
    };

    const startAnimation = () => {
      const startTimestamp = Date.now();
      updateWidth(startTimestamp);
    };

    startAnimation();

    return () => cancelAnimationFrame(animationId);
  }, [activeIndex]);

  const handlePreviewClick = (index) => {
    setActiveIndex(index);
    setWidth(0);
    // Add Tailwind CSS classes to start pulsating animation
    document.getElementById(`preview-${index}`).classList.add('animate-pulsate');
    // Remove the classes after a delay to stop the animation
    setTimeout(() => {
      document.getElementById(`preview-${index}`).classList.remove('animate-pulsate');
    }, 1000);
  };

  return (
    <div className='w-full'>
       {/* Header */}
       <header className='shadow-sm shadow-black w-full h-16 py-5  flex justify-between items-center'>
        <div className='w-full flex justify-between max-w-[1600px] m-auto px-20'>
          <a href="/" className="logo-link" onClick={handleLogoClick}>
            <img src={LogoSVG} alt="Logo" />
          </a>
          <UserMenu /> {/* Adicione o componente UserMenu aqui */}
        </div>
      </header>

      {/* Banner Section */}
      <div className='w-full max-w-[1600px] m-auto'>
        <div className='w-full h-[584px]'>
          <div className='w-full h-full flex justify-center relative'>
            {/* Gradient overlays */}
            <div className='absolute bottom-0 w-full h-[100px] bg-gradient-to-t via-[#0B0418] from-[#0B0418] to-transparent z-20' />
            <div className='absolute right-0 w-[498px] h-full bg-gradient-to-l from-[#0b0418e4] to-transparent z-20' />

            {/* Main Banner Image */}
            <img
              className="object-cover absolute w-full h-full"
              src={featuredContent[activeIndex].imgBanner}
              alt=""
            />

            {/* Banner Content */}
            <div className='absolute z-30 text-white right-16 bottom-56 w-full max-w-sm flex flex-col justify-center' style={{ height: 'auto' }}>

              {/* <p className='text-base text-shadow-effect font-semibold'>{featuredContent[activeIndex].game}</p> */}
              <h1 className='text-3xl pb-3 font-semibold text-shadow-effect'>{featuredContent[activeIndex].title}</h1>
              <p className='text-base py-4 text-shadow-effect'>{featuredContent[activeIndex].text}</p>
              <p className='pt-4 text-shadow-effect'>Grátis com Prime Gaming</p>
              <button className='text-txtPrimeBlue font-semibold w-[110px] rounded-md mt-1 p-2 whitespace-nowrap bg-primeBlue hover:bg-primeBlueHover'>Obter jogo</button>
            </div>

            {/* Preview Images */}
            <div className='w-full max-w-[935px] absolute bottom-1 z-20 justify-center flex gap-4'>
              {featuredContent.map((preview, index) => (
                <div
                  onClick={() => handlePreviewClick(index)}
                  key={index}
                  className='w-44 h-24 rounded-md relative overflow-hidden transform transition-transform duration-500 ease-in-out'
                  id={`preview-${index}`}
                >
                  <div style={{ width: `${width}%` }} className={`${index === activeIndex ? 'h-full bg-[#00000071] absolute' : ''}`} />
                  <img
                    src={preview.preview}
                    className='object-cover h-full w-full cursor-pointer'
                    alt={`Preview ${index}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
