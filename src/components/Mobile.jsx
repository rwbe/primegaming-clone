import React, { useEffect, useState } from 'react';
import logoSVG from '../assets/svg/Logo.svg';
import MagnifyIcon from '../assets/svg/Magnify.svg';
import featuredContent from '../data/featuredContent.json';
import Cards from './GamesCards';
import ContentCard from './ContentCard';
import ChallengeCard from './ChallengeCard';
import freeGamesData from '../data/freeGames.json';
import dailyChallengesData from '../data/dailyChallenges.json';
import gamingContentData from '../data/gamingContent.json';
import Banner from './PromotionBanner'; // Importação do Banner

const Mobile = () => {
  const gameNames = ['STAR WARS Battlefront II (Classic, 2005)', 'Everdream Valley', 'MythForce', 'Blast Brigade vs. the Evil Legion of Dr. Cread', 'Projection: First Light'];

  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [freeGames, setFreeGames] = useState([]);
  const [dailyChallenges, setDailyContent] = useState([]);
  const [gamingContent, setGamingContent] = useState([]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setWidth(0); // Reset width when changing filters
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % featuredContent.length);
      setWidth(0); // Reset width when changing banners
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
        setActiveIndex((prevIndex) => (prevIndex + 1) % featuredContent.length); // Immediately change image after reaching 100%
      }
    };

    const startAnimation = () => {
      const startTimestamp = Date.now();
      updateWidth(startTimestamp);
    };

    startAnimation(); // Start animation on component mount

    return () => cancelAnimationFrame(animationId);
  }, [activeIndex]);

  const handlePreviewClick = (index) => {
    setActiveIndex(index);
    setWidth(0);
    // Adicionar a classe animate-pulsate ao elemento clicado
    document.getElementById(`preview-${index}`).classList.add('animate-pulsate');
    // Remover a classe após a animação
    setTimeout(() => {
      document.getElementById(`preview-${index}`).classList.remove('animate-pulsate');
    }, 1000);
  };

  useEffect(() => {
    // Carregar os dados dos jogos gratuitos
    setFreeGames(freeGamesData.freeGames || []);
    // Carregar os dados do conteúdo de jogos
    setGamingContent(gamingContentData.gamingContent || []);
     // Carregar os dados do conteúdo de jogos
    setDailyContent(dailyChallengesData.dailyChallenges || []);
  }, []);

  return (
    <div className='w-full'>
      <header className='shadow-sm shadow-black w-full h-14 absolute z-50 bg-[#0B0418] flex justify-between items-center'>
       <div className='w-full max-w-[1600px] m-auto max-sm:px-6 max-lg:px-12 px-6 py-3'>
        <img src={logoSVG} alt="Logo" className="h-8" />
        </div>
      </header>

      <div className='h-[208px] max-lg:h-[386px] max-[450px]:h-[200px] w-full relative'>
        <div className='w-full h-full flex justify-center relative'>
          <div className='absolute -bottom-5 max-[450px]:-bottom-16 max-lg:-bottom-14 w-full max-lg:h-[100px] h-[60px] bg-gradient-to-t max-lg:via-[rgb(11,4,24)] from-[#0B0418] to-transparent z-20' />
          <div className='absolute max-[450px]:text-[22px] text-center z-30 font-semibold text-[28px] -bottom-9 text-white drop-shadow-md'>
            <h1>{gameNames[activeIndex]}</h1>
            <p className='text-[#C2BCD3] mt-1 text-base max-[450px]:text-sm font-semibold'>Jogo grátis com Prime Gaming</p>
          </div>
          <img
            className="object-cover absolute top-3 max-[450px]:top-4 max-lg:top-7 w-full h-full"
            src={featuredContent[activeIndex].imgBanner}
            alt="Banner"
          />
        </div>

        <div className='relative max-md:pl-32 items-center noscroll overflow-auto pr-5 -bottom-12 z-50 justify-center flex gap-4 cursor-pointer'>
          {featuredContent.map((preview, index) => (
            <div
              onClick={() => handlePreviewClick(index)}
              key={index}
              className={`min-w-[115px] z-50 h-18 relative rounded-md overflow-hidden ${index === activeIndex ? 'animate-pulsate' : ''}`}
              id={`preview-${index}`}
            >
              <div style={{ width: `${width}%` }} className={`${index === activeIndex ? 'h-full bg-[#00000071] absolute' : ''}`} />
              <img src={preview.preview} alt={`Preview ${index}`} className='object-cover h-full w-full rounded-md' />
            </div>
          ))}
        </div>
      </div>

      <div className='w-full mt-20 m-auto max-w-[1600px] '>
        <div className='flex flex-wrap pt-12 items-center justify-between px-6'>
          <div className='flex gap-2 text-xs py-5 relative whitespace-nowrap'>
            <button
              className={`hover:bg-opacity-20 hover:bg-white py-1 px-3 h-9 rounded-full ${activeFilter === 'all' ? 'bg-opacity-20 bg-white text-white font-bold' : 'text-white'}`}
              onClick={() => handleFilterClick('all')}
            >
              Todos
            </button>
            <button
              className={`hover:bg-opacity-20 font-semibold hover:bg-white py-1 px-3 h-9 rounded-full ${activeFilter === 'free' ? 'bg-opacity-20 bg-white text-white' : 'text-[#C2BCD3]'}`}
              onClick={() => handleFilterClick('free')}
            >
              Jogos gratuitos
            </button>
            <button
              className={`hover:bg-opacity-20 font-semibold hover:bg-white py-1 px-3 h-9 rounded-full ${activeFilter === 'benefits' ? 'bg-opacity-20 bg-white text-white' : 'text-[#C2BCD3]'}`}
              onClick={() => handleFilterClick('benefits')}
            >
              Mais benefícios
            </button>
          </div>
          <div className='w-[404px] mb-3 flex items-center rounded-full relative h-[35px] focus:bg-[#3B3646] border-[1px] border-white overflow-hidden'>
            <img src={MagnifyIcon} alt="" className='px-4 absolute' />
            <input type="text" placeholder='Pesquisar no Prime Gaming' className='focus:bg-[#ffffff22] font-normal text-xs pb-1 text-[#C2BCD3] pl-12 w-full h-full bg-transparent outline-none' />
          </div>
        </div>
        <h1 className='text-white py-2 font-semibold text-[18px] px-6 leading-5'>Jogos completos para PC, <span className='font-bold'>grátis com Prime Gaming</span></h1>
        <div className='w-full flex p-2 gap-2 overflow-auto noscroll pl-6'>
          {Array.isArray(freeGames) &&
            freeGames.map((info, index) => (
              <Cards key={index} img={info.img} title={info.title} howToPlayButton={info.howToPlayButton} />
            ))}
        </div>
        <h1 className='text-white py-6 font-semibold text-[20px] border-t-[1px] border-[#c2bcd35b] flex items-center'>
          <span className='text-white text-center text-[10px] font-bold px-2 py-1 mx-2 bg-orange-500 rounded'>Novo</span> Desafios diários, <span className='font-bold'>uma exclusividade Prime Gaming</span>
        </h1>
        <div className='grid max-md:grid-cols-2 max-[850px]:grid-cols-3 px-6 gap-2'>
         {Array.isArray(dailyChallenges) &&
           dailyChallenges.map((info, index) => (
            <ChallengeCard key={index} img={info.img} title={info.title} subtitle={info.subtitle} />
          ))}
        </div>

        <Banner /> {/* Adicionando o Banner abaixo dos ChallengeCard */}

        <h1 className='text-white px-6 py-6 font-semibold text-[22px] border-t-[1px] border-[#c2bcd35b]'>Conteúdo do jogo <span className='font-bold'>grátis com Prime</span></h1>
        <div className='grid max-md:grid-cols-2 max-[850px]:grid-cols-3 px-6 gap-2'>
         {Array.isArray(gamingContent) &&
           gamingContent.map((info, index) => (
            <ContentCard key={index} img={info.img} gameName={info.gameName} title={info.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
