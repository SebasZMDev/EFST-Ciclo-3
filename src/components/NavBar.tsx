import { getUserInfo } from '../hooks/getUserInfo';

const NavBar = () => {
    const { getUser } = getUserInfo();

    return (
        <nav className='nav-bar'>
            <img className='nav-logo' alt="Logo" />
            <div className='nav-links'>
                <h4>Buses y Viajes</h4>
                <h4>Horarios y Precios</h4>
                {getUser() ? (
                    "Bienvenido" +
                    getUser().name
                ) : (
                    <button>Login</button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
