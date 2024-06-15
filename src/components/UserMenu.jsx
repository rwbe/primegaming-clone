import React, { useState } from 'react';
import LanguageIcon from '../assets/svg/LanguageIcon.svg';
import ChevronIcon from '../assets/svg/ChevronIcon.svg';
import UserIcon from '../assets/svg/UserIcon.svg';
import AvatarImage from '../assets/Avatar.png';
import MyCollectionIcon from '../assets/svg/MyCollectionIcon.svg';
import PrimeGamingIcon from '../assets/svg/PrimeGamingIcon.svg';
import SupportIcon from '../assets/svg/SupportIcon.svg';
import TwitchIcon from '../assets/svg/TwitchIcon.svg';
import SettingsIcon from '../assets/svg/SettingsIcon.svg';
import LanguageSettingsIcon from '../assets/svg/LanguageSettingsIcon.svg';
import LogoutIcon from '../assets/svg/LogoutIcon.svg';
import GitHubIcon from '../assets/svg/GitHubIcon.svg';

const CheckIcon = (
    <svg
        className="tw-svg__asset tw-svg__asset--check tw-svg__asset--inherit"
        width="18px"
        height="18px"
        version="1.1"
        viewBox="0 0 20 20"
        x="0px"
        y="0px"
    >
        <path
            d="M7.429 15c-.245 0-.49-.09-.683-.269l-3.428-3.2a1 1 0 0 1 1.364-1.463l2.747 2.564 7.889-7.363a1 1 0 0 1 1.365 1.462l-8.571 8a1.002 1.002 0 0 1-.683.27"
            fill="#FFFFFF"
            fillRule="evenodd"
        ></path>
    </svg>
);

const UserMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [username, setUsername] = useState('Ricardo');
    const [github, setGithub] = useState('rwbe');
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: 'Português - Brasil',
        code: 'PT',
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
        setIsUserMenuOpen(false);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
        setIsLanguageMenuOpen(false);
    };

    const changeLanguage = (language) => {
        setSelectedLanguage(language);
        setIsLanguageMenuOpen(false);
        // Lógica para mudar o idioma
        console.log(`Mudou para ${language.code}`);
    };

    const languageOptions = [
        { name: 'Deutsch', code: 'DE' },
        { name: 'English', code: 'EN' },
        { name: 'English - UK', code: 'EN' },
        { name: 'Español - España', code: 'ES' },
        { name: 'Español - Latinoamérica', code: 'ES' },
        { name: 'Français', code: 'FR' },
        { name: 'Italiano', code: 'IT' },
        { name: 'Nederlands', code: 'NL' },
        { name: 'Polski', code: 'PL' },
        { name: 'Português - Brasil', code: 'PT' },
        { name: 'Português - Europeu', code: 'PT' },
        { name: 'Svenska', code: 'SV' },
        { name: 'Türkçe', code: 'TR' },
        { name: 'عربي', code: 'AR' },
        { name: '日本語', code: 'JA' },
        // Adicione outras opções de idioma conforme necessário
    ];

    return (
        <div className="relative">
            <div className="flex items-center mb-4 justify-center">
                {/* Menu de Idiomas */}
                <div className="relative">
                    <div className="cursor-pointer flex items-center text-language font-bold" onClick={toggleLanguageMenu}>
                        <img src={LanguageIcon} className="w-6 h-6 mr-1 mt-1" alt="Language Icon" />
                        <p className="text-language mr-1">{selectedLanguage.code}</p>
                        <img
                            src={ChevronIcon}
                            alt="Chevron Icon"
                            className={`w-4 h-4 mt-1 transition-transform transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                        />
                    </div>

                    {/* Menu de Idiomas (dropdown) */}
                    {isLanguageMenuOpen && (
                        <ul className="absolute top-10 right-1 w-48 font-medium text-base text-userMenuText bg-userMenuBG rounded-md overflow-hidden z-50">
                            {languageOptions.map((option) => (
                                <li
                                    key={option.code}
                                    onClick={() => changeLanguage(option)}
                                    className={`p-2 cursor-pointer ${selectedLanguage.name === option.name ? 'bg-userMenuBGHover' : 'hover:bg-userMenuBGHover'}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={selectedLanguage.name === option.name ? 'text-white font-bold' : 'font-normal'}>
                                            {option.name}
                                        </span>
                                        {selectedLanguage.name === option.name && CheckIcon}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Menu de Usuário */}
                <div className="cursor-pointer flex items-center text-userMenuText font-bold ml-4" onClick={toggleUserMenu}>
                    <img src={UserIcon} className="w-6 h-6" alt="User Icon" />
                    {username}
                    <img
                        src={ChevronIcon}
                        alt="Chevron Icon"
                        className={`w-4 h-4 ml-1 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </div>

            {/* Menu de Usuário (perfil dropdown) */}
            {isUserMenuOpen && (
                <div className="absolute top-10 right-0 w-60 bg-userMenuBG rounded-md overflow-hidden shadow-lg z-50">
                    <div className="p-4 flex items-center">
                        <img src={AvatarImage} className="w-10 h-10 rounded-full mr-2" alt="User Avatar" />
                        <div>
                            <div className="font-medium text-base text-white font-semibold">{username}</div>
                            <span className="flex items-center font-medium text-sm text-userMenuText font-semibold">
                                <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <img src={GitHubIcon} alt="GitHub Icon" className="w-4 h-4 mr-1" />
                                    {github}
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="user-dropdown__divider"></div>
                    <ul>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={MyCollectionIcon} alt="My Collection Icon" className="w-4 h-4 mr-2" />
                            <span>Minha coleção</span>
                        </li>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={PrimeGamingIcon} alt="Prime Gaming Icon" className="w-4 h-4 mr-2" />
                            <span>Sobre o Prime Gaming</span>
                        </li>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={SupportIcon} alt="Support Icon" className="w-4 h-4 mr-2" />
                            <span>Suporte</span>
                        </li>
                        <div className="user-dropdown__divider"></div>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={TwitchIcon} alt="Twitch Icon" className="w-4 h-4 mr-2" />
                            <span>Gerenciar conta Twitch</span>
                        </li>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={SettingsIcon} alt="Settings Icon" className="w-4 h-4 mr-2" />
                            <span>Configurações</span>
                        </li>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 flex items-center">
                            <img src={LanguageSettingsIcon} alt="Language Settings Icon" className="w-4 h-4 mr-2" />
                            <span>Idioma</span>
                        </li>
                        <div className="user-dropdown__divider"></div>
                        <li className="text-userMenuText text-base font-semibold cursor-pointer hover:bg-userMenuBGHover py-1 px-4 mb-2 flex items-center">
                            <img src={LogoutIcon} alt="Logout Icon" className="w-4 h-4 mr-2" />
                            <span>Sair</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
