import { useState, useEffect } from 'react';
import { getUserInfo } from '../hooks/getUserInfo';
import './ComStyles.css'
import { WiMoonFull } from "react-icons/wi";

const NavBar = () => {
    const { getUser } = getUserInfo();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className='nav-bar'>
            <img className='nav-logo' src='/public/cordillera.png' alt="Logo" />
            <div className='nav-links'>
                <h4 className='nav-link'>Buses y Viajes</h4>
                <h4 className='nav-link'>Horarios y Precios</h4>
                <button className='nav-theme' onClick={toggleTheme}><WiMoonFull className={theme=='light'?'moon':'sun'}/></button>
                <div className='nav-user'>
                    {getUser() ? (
                        <span className='welcome-message'>
                            <h4>Bienvenido {getUser().name}</h4>
                        </span>
                    ) : (
                        <button className='login-button'>Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
