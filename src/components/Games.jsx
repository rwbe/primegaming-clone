import { useEffect, useRef, useState } from 'react';
import { CaretLeft, CaretRight } from 'phosphor-react';
import GamesCards from './GamesCards';
import PagePicker from '../components/PagePicker';
import cardsData from '../data/freeGames.json';

const Games = () => {
  const groupedCards = [];
  for (let i = 0; i < cardsData.freeGames.length; i += 4) {
    groupedCards.push(cardsData.freeGames.slice(i, i + 4));
  }

  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const currentRef = carouselRef.current;

    const handleScroll = () => {
      if (currentRef) {
        setScrollPosition(currentRef.scrollLeft);
        setMaxScroll(currentRef.scrollWidth - currentRef.clientWidth);
      }
    };

    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      setScrollPosition(currentRef.scrollLeft);
      setMaxScroll(currentRef.scrollWidth - currentRef.clientWidth);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
      setCurrentPage((prevPage) => Math.min(prevPage + 1, groupedCards.length));
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='mb-7'>
      <h1 className='text-white py-[13px] font-semibold text-[28px]'>Jogos completos para PC, grátis com Prime Gaming</h1>
      <div className='flex items-center relative'>
        <button onClick={handlePrev} disabled={scrollPosition === 0}>
          <CaretLeft
            size={32}
            weight="bold"
            className={`${
              scrollPosition === 0 ? 'opacity-60 cursor-no-drop' : 'cursor-pointer'
            } -mt-8 text-white absolute -left-10 `}
          />
        </button>
        <div ref={carouselRef} className='flex transition-all scroll-smooth snap-mandatory gap-4 snap-x overflow-hidden w-full m-auto max-w-[1700px]'>
          {groupedCards.map((group, groupIndex) => (
            <div key={groupIndex} className='w-full gap-4 min-w-full snap-center h-full flex'>
              {group.map((info, cardIndex) => (
                <GamesCards key={cardIndex} {...info} showHowToPlayButton={cardIndex % 2 === 0} />
              ))}
            </div>
          ))}
        </div>
        <button onClick={handleNext} disabled={scrollPosition === maxScroll}>
          <CaretRight
            size={32}
            weight="bold"
            className={`${
              scrollPosition === maxScroll ? 'opacity-60 cursor-no-drop' : 'cursor-pointer'
            } -mt-8 text-white absolute -right-10 `}
          />
        </button>
      </div>

      <PagePicker numPages={groupedCards.length} currentPage={currentPage} onPageClick={handlePageClick} />
    </div>
  );
};

export default Games;
