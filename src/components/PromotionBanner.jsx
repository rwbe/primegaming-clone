import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row justify-start items-start p-4 md:p-8 bg-opacity-75 text-white mt-6 mb-6 rounded-lg bg-cover bg-center"
         style={{ 
           backgroundImage: `url('https://m.media-amazon.com/images/G/01/sm/PG_Banners/twitch-art-banner-official-desktop2x.png')`
         }}>
      {/* Imagem de fundo para mobile */}
      <div className="md:hidden absolute inset-0 w-full h-96 bg-cover bg-center rounded-lg"
           style={{ 
             backgroundImage: `url('https://m.media-amazon.com/images/G/01/sm/PG_Banners/twitch-art-banner-official-mobile2x.png')`
           }}>
      </div>
      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 md:opacity-0 rounded-lg"></div>
      
      {/* Conteúdo do banner */}
      <div className="relative max-w-screen-xl z-10">
        {/* Conteúdo visível somente no mobile */}
        <div className="md:hidden text-center justify-center mt-32">
          <h2 className="text-xl font-semibold mb-1">Apoie seus streamers favoritos da Twitch com uma assinatura mensal de canal</h2>
          <p className="text-sm font-medium">Os clientes do Amazon Prime recebem uma assinatura mensal de canal,</p>
          <p className="text-sm font-medium">emotes exclusivos e muito mais.</p>
          <div className="flex justify-center items-center mb-4">
            <svg className="svg-icon mr-1" width="15px" height="15px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" style={{ fill: '#1A98FF' }}><path d="M13.683 8.731l-4.286 4a1.002 1.002 0 0 1-1.365 0l-1.714-1.602a1 1 0 0 1 1.365-1.461l1.03.963 3.605-3.363a1.001 1.001 0 0 1 1.365 1.463m4.279 1.077l-2.196-5.303a.5.5 0 0 0-.271-.27l-5.303-2.197a.499.499 0 0 0-.383 0L4.506 4.234a.5.5 0 0 0-.271.271L2.038 9.808a.508.508 0 0 0 0 .383l2.194 5.304a.501.501 0 0 0 .27.27l5.307 2.196a.487.487 0 0 0 .383 0l5.303-2.196a.501.501 0 0 0 .27-.27l2.197-5.304a.499.499 0 0 0 0-.383" fill-rule="evenodd" style={{ fill: '#1A98FF' }}></path></svg>
            <p className="text-xs mb-0">Incluído com Amazon Prime</p>
          </div>
          <button className="text-white font-semibold py-1 px-4 rounded border border-white text-xs md:text-sm hover:bg-learnMore">Saiba mais</button>
        </div>

        {/* Conteúdo visível somente no desktop */}
        <div className="hidden md:block text-left">
          <h2 className="text-3xl font-semibold mb-1">Apoie seus streamers favoritos da</h2>
          <h2 className="text-3xl font-semibold mb-1">Twitch com uma assinatura mensal</h2>
          <h2 className="text-3xl font-semibold mb-1">de canal</h2>
          <p className="text-base font-medium">Os clientes do Amazon Prime recebem uma assinatura mensal de canal,</p>
          <p className="text-base font-medium">emotes exclusivos e muito mais.</p>
          <div className="flex items-center mb-4">
            <svg className="svg-icon mr-1" width="15px" height="15px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" style={{ fill: '#1A98FF' }}><path d="M13.683 8.731l-4.286 4a1.002 1.002 0 0 1-1.365 0l-1.714-1.602a1 1 0 0 1 1.365-1.461l1.03.963 3.605-3.363a1.001 1.001 0 0 1 1.365 1.463m4.279 1.077l-2.196-5.303a.5.5 0 0 0-.271-.27l-5.303-2.197a.499.499 0 0 0-.383 0L4.506 4.234a.5.5 0 0 0-.271.271L2.038 9.808a.508.508 0 0 0 0 .383l2.194 5.304a.501.501 0 0 0 .27.27l5.307 2.196a.487.487 0 0 0 .383 0l5.303-2.196a.501.501 0 0 0 .27-.27l2.197-5.304a.499.499 0 0 0 0-.383" fill-rule="evenodd" style={{ fill: '#1A98FF' }}></path></svg>
            <p className="text-sm mb-0">Incluído com Amazon Prime</p>
          </div>
          <button className="text-white font-semibold py-1 px-4 rounded border border-white text-sm hover:bg-learnMore">Saiba mais</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
