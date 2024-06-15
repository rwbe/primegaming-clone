import React from 'react';
import ContentCard from './ContentCard';
import gamingContent from '../data/gamingContent.json';
import Banner from './PromotionBanner';

const Contents = () => {
  // Certifique-se de que gamingContent.contentGamesCards é um array
  const contentArray = gamingContent.gamingContent || [];

  return (
    <div className='w-full px-[78px] max-lg:px-[40px] m-auto max-w-[1600px]'>
      <div className='flex pt-6 items-center justify-between'>
        {/* Adicione o conteúdo desejado aqui */}
      </div>

      <h1 className='border-t-[1px] border-[#c2bcd35b] mb-6'> 
        {/* Adicione o Banner aqui, abaixo do h1 e acima do próximo h1 */}
        <Banner />
        <span className='text-white py-6 font-semibold text-[28px]'>
          Conteúdo do jogo <span className='font-bold'>grátis com Prime</span>
        </span>
      </h1>

      <div className='grid max-lg:grid-cols-3 grid-cols-4 gap-4'>
        {contentArray.map((data, index) => (
          <ContentCard key={index} {...data} />
        ))}
      </div>
      
      {/* Adicione uma linha branca separando os elementos */}
      <h1 className='text-white py-6 font-semibold text-[28px] border-t-[1px] border-[#c2bcd35b]'></h1>
    </div>
  );
};

export default Contents;
