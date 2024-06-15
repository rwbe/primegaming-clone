import ContentCard from './ContentCard';
import freeGames from '../data/freeGames.json';

const FreeGames = () => {
  // Certifique-se de que gamingContent.contentGamesCards é um array
  const contentArray = freeGames.gamingContent || [];

  return (
    <div className='w-full px-[78px] max-lg:px-[40px] m-auto max-w-[1600px]'>
      <div className='flex pt-6 items-center justify-between '>{/* Adicione o conteúdo desejado aqui */}</div>
      <h1 className='text-white py-6 font-semibold text-[28px] border-t-[1px] border-[#c2bcd35b]'>
        Jogos completos para PC, <span className='font-bold'>grátis com Prime Gaming</span>
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

export default FreeGames;
