import primeGamingLogo from '../assets/svg/FooterLogo.svg';
import amazonSVG from '../assets/svg/Amazon.svg';

const PrimeGamingFooter = () => {
  const handleLogoClick = () => {
    // Lógica para ação ao clicar no logo
  };

  const handleScrollToTop = () => {
    // Lógica para rolar para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <section
        onClick={handleScrollToTop}
        className='bg-top-section text-white py-4'
        style={{ backgroundColor: '#211A2C', cursor: 'pointer' }}
      >
        <div className='container mx-auto flex justify-center items-center'>
          <button className='text-sm font-semibold cursor-pointer'>
            Voltar ao Topo
          </button>
        </div>
      </section>

      <footer className='bg-footer text-white py-8'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
          {/* Adicione uma linha branca vertical à frente da logo */}
          <div className='flex flex-col md:flex-row items-center md:items-start'>
            <img
              src={primeGamingLogo}
              alt='Prime Gaming Logo'
              className='cursor-pointer mb-4 md:mb-0 md:mr-4'
              onClick={handleLogoClick}
            />
            <div className='border-l border-white h-0 md:h-14 md:mx-4'></div>
            <div className='text-center md:text-left'>
              <p className='text-sm text-footerText font-semibold'>Siga @PrimeGaming</p>
              <p className='text-xs text-footerText'>©1996-2024, Amazon.com, Inc. ou suas afiliadas</p>
              <div className='flex flex-wrap justify-center md:justify-start'> {/* Centralizando os links */}
                <a href='#' className='text-xs text-links mr-4 hover:underline'>
                  Condições de Uso
                </a>
                <a href='#' className='text-xs text-links mr-4 hover:underline'>
                  Aviso de Privacidade
                </a>
                <a href='#' className='text-xs text-links mr-4 hover:underline'>
                  Guia do Prime Gaming
                </a>
                <a href='#' className='text-xs text-links mr-4 hover:underline'>
                  Aviso sobre cookies
                </a>
                <a href='#' className='text-xs text-links mr-4 hover:underline'>
                  Anúncios baseados em interesses
                </a>
              </div>
            </div>
          </div>

          {/* Substituído pelo SVG externo */}
          <div className='flex items-center mt-4 md:mt-0'>
            <div>
              {/* Use o caminho para o seu arquivo SVG externo */}
              <img src={amazonSVG} alt='AMAZON' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrimeGamingFooter;
