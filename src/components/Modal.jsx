import React, { useRef, useEffect } from 'react';
import { SiTailwindcss, SiVite, SiJavascript } from 'react-icons/si';
import { FaTimes } from 'react-icons/fa'; // Importando o ícone de X
import PrimeGamingLogo from '../assets/svg/AmazonPrimeLogo.svg'; // Importando o SVG da logo do Prime Gaming

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    const closeModalOnOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', closeModalOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, [setShowModal]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="hidden md:fixed z-50 top-0 left-0 w-full h-full md:flex justify-center items-center">
          <div className="bg-black bg-opacity-75 absolute inset-0"></div>
          <div ref={modalRef} className="bg-gray-900 text-white rounded-lg p-8 max-w-md relative z-10 flex flex-col items-center texture-bg">
            <button className="absolute top-4 right-4 text-white text-xl" onClick={handleCloseModal}>
              <FaTimes /> {/* Ícone de X para fechar o modal */}
            </button>
            <h2 className="flex items-center text-3xl font-bold mb-4 text-purple-400">
              <img src={PrimeGamingLogo} alt="Prime Gaming Logo" className="w-auto h-auto mr-2" />
            </h2>
            <p className="text-gray-300 mb-6">
            Bem-vindo ao clone do Prime Gaming! Este projeto foi desenvolvido para fins educacionais e demonstração de habilidades em desenvolvimento web. Não deve ser usado para fins mal-intencionados.
            </p>
            <div className="text-gray-300 mb-6">
              <h3 className="text-lg font-bold mb-2 text-center">Tecnologias Utilizadas:</h3>
              <div className="flex mb-4 text-center align-items justify-center">
                <SiJavascript className="mr-2 mb-1" style={{ fontSize: '30px' }} />
                <SiTailwindcss className="mr-2 mb-1" style={{ fontSize: '30px' }} />
                <SiVite className="mr-2 mb-1" style={{ fontSize: '30px' }} />
              </div>
              <h3 className="text-lg font-bold mb-2 text-left">Funcionalidades do Clone do Prime Gaming:</h3>
              <ul className="list-disc ml-6">
                <li>Permite realizar o resgate dos jogos e conteúdos de forma fictícia</li>
                <li>Conteúdo exclusivo para jogadores, incluindo skins, itens e pacotes</li>
                <li>Recompensas em jogos populares</li>
                <li>Integração com Twitch para benefícios adicionais</li>
                <li>Serviço de streaming de jogos com acesso a uma biblioteca extensa</li>
              </ul>
            </div>
            <div className="text-gray-300 mt-auto mb-4">
              <p className="mb-2 font-semibold">Desenvolvido por: Ricardo Willian</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
