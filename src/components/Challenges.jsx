import React, { useState } from 'react';
import MagnifyIcon from '../assets/svg/Magnify.svg';
import ChallengeCard from './ChallengeCard';
import BannerCarousel from './Games'; // Importando o componente Games (BannerCarousel)
import ChallengesData from '../data/dailyChallenges.json';
import ContentsData from '../data/gamingContent.json';
import FreeGamesData from '../data/freeGames.json';

const Challenges = () => {
  const { dailyChallenges } = ChallengesData;
  const { gamingContent } = ContentsData;
  const { freeGames } = FreeGamesData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filterAllGames = () => {
    return activeFilter === 'all' ? dailyChallenges : [];
  };

  const filterFreeGames = () => {
    return freeGames.filter((info) => info.category === 'free');
  };

  const filterBenefitsGames = () => {
    if (activeFilter === 'benefits' && dailyChallenges.length > 0) {
      // Retorna uma array contendo os primeiros 6 elementos de dailyChallenges quando o filtro for 'benefits'
      return dailyChallenges.filter((challenge) => challenge.category === 'benefits').slice(0, Math.min(6, dailyChallenges.length));
    } else {
      // Retorna um array vazio para outros filtros ou se dailyChallenges estiver vazio
      return [];
    }
  };

  const filterContentGames = () => {
    if (activeFilter === 'benefits') {
      // Retorna dailyChallenges quando o filtro for 'benefits'
      return dailyChallenges;
    } else {
      // Retorna um array vazio para outros filtros
      return [];
    }
  };

  const filteredCards =
    activeFilter === 'free'
      ? filterFreeGames()
      : activeFilter === 'benefits'
      ? [...filterBenefitsGames(), ...filterContentGames()]
      : filterAllGames();

  return (
    <div className='w-full px-[78px] max-lg:px-[40px] m-auto max-w-[1600px]'>
      <div className='flex pt-6 items-center justify-between'>
        <div className='flex gap-5 text-lg max-lg:text-base'>
          <button
            className={`hover:bg-opacity-20 hover:bg-white py-[13px] px-5 rounded-full ${activeFilter === 'all' ? 'bg-opacity-20 bg-white text-white font-bold' : 'text-white'}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button
            className={`hover:bg-opacity-20 font-semibold hover:bg-white p-3 px-5 rounded-full ${activeFilter === 'free' ? 'bg-opacity-20 bg-white text-white' : 'text-[#C2BCD3]'}`}
            onClick={() => setActiveFilter('free')}
          >
            Jogos gratuitos
          </button>
          <button
            className={`hover:bg-opacity-20 font-semibold hover:bg-white p-3 px-5 rounded-full ${activeFilter === 'benefits' ? 'bg-opacity-20 bg-white text-white' : 'text-[#C2BCD3]'}`}
            onClick={() => setActiveFilter('benefits')}
          >
            Mais benefícios
          </button>
        </div>
        <div className='w-[404px] flex items-center rounded-full relative h-[45px] focus:bg-[#3B3646] border-[1px] border-white overflow-hidden'>
          <img src={MagnifyIcon} alt="" className='px-4 absolute' />
          <input type="text" placeholder='Pesquisar no Prime Gaming' className='focus:bg-[#ffffff22] font-normal text-lg text-[#C2BCD3] pl-12 w-full h-full bg-transparent outline-none' />
        </div>
      </div>

      {/* Renderiza o BannerCarousel apenas se o filtro ativo não for 'benefits' */}
      {activeFilter !== 'benefits' && (
        <BannerCarousel sectionTitle='Jogos completos para PC, grátis com Prime Gaming' />
      )}

      {filteredCards.length > 0 && (
        <h1 className='text-white py-6 font-semibold text-[28px] border-t-[1px] border-[#c2bcd35b] flex items-center'>
          <span className='text-white text-center text-[12px] font-bold px-2 py-1 mx-2 bg-orange-500 rounded'>Novo</span> Desafios diários, <span className='font-bold'>uma exclusividade Prime Gaming</span>
        </h1>
      )}

      <div className='grid max-lg:grid-cols-3 grid-cols-4 gap-2'>
        {filteredCards.map((info, index) => (
          <ChallengeCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
