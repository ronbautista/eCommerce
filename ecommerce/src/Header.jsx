import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Filter from './Filter';
import Login from './Login';
import Nestfix from '../src/assets/Nestfix.png';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';


function Header({ onSelectService }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleToggleLogin = () => {
        setIsLoginOpen(!isLoginOpen);
    };

    const handleSelectService = (services) => {
        onSelectService(services);
        setIsModalOpen(false);
    };

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex flex-col items-center bg-white py-4">
            <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg w-full h-16">
                <div className="flex items-center">
                    <img
                        src={Nestfix}
                        alt="Profile"
                        className="w-10 h-10 rounded-full border-2 border-gray-300"
                    />
                </div>
    
                <div className="flex flex-row items-center space-x-2 flex-grow ml-4">
                    <input
                        type="text"
                        placeholder={t('Search')}
                        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    <div className="flex space-x-2">
                        <button className="border border-black text-black px-4 py-2 rounded-md hover:bg-black hover:text-white focus:outline-none">
                            <i className="fa-solid fa-magnifying-glass"></i>
 </button>
                        <button 
                            onClick={handleOpenModal}
                            className="flex items-center border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white focus:outline-none"
                        >
                            <i className="fas fa-filter mr-2"></i>
                            {t('Filter')}
                        </button>
                    </div>
                </div>
    
                <div className="flex items-center space-x-4 ml-4">
                    <a href="/become-skilled-worker" className="text-black hover:underline">
                        {t('Become a skilled worker')}
                    </a>
                    <div className="flex items-center">
                        <i className="fas fa-bell text-gray-600"></i>
                        <span className="ml-1 text-gray-700">{t('notification')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0">
                        <button onClick={handleToggleLogin} className="text-black hover:underline">
                            {t('Login')}
                        </button>
                        <span className="hidden md:inline">|</span>
                        <a href="/signup" className="text-black hover:underline">
                            {t('Signup')}
                        </a>
                    </div>
                </div>

                {/* Language Selector Dropdown */}
                <div className="relative">
                    <select
                        onChange={(e) => changeLanguage(e.target.value)}
                        className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-2"
                        defaultValue={i18n.language}
                        aria-label="Select language"
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="fil">Filipino</option>
                        <option value="jp">Japanese</option>
                        <option value="ko">Korea</option>
                        <option value="zh">Chinese</option>
                    </select>
                </div>
            </div>
    
            <Filter isOpen={isModalOpen} onClose={handleCloseModal} onSelectFilter={handleSelectService} />
            <Login isOpen={isLoginOpen} onClose={handleToggleLogin} />
        </div>
    );
}

export default Header;