import { getUserInfo } from '../hooks/getUserInfo';
import './ComStyles.css'

const NavBar = () => {
    const { getUser } = getUserInfo();

    return (
        <nav className='nav-bar'>
            <img className='nav-logo' src='/public/logo.png' alt="Logo" />
            <div className='nav-links'>
                <h4 className='nav-link'>Buses y Viajes</h4>
                <h4 className='nav-link'>Horarios y Precios</h4>
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
