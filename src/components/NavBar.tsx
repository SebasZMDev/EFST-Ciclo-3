import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../hooks/getUserInfo';
import './ComStyles.css'
import CustomBtn from './CustomBtn';


const NavBar = () => {
    const navigate = useNavigate();
    const { getUser } = getUserInfo();
    const user = getUser();
    return (
        <nav className='nav-bar'>
            <img className='nav-logo' src='/public/logo.png' alt="Logo" />
            <div className='nav-links'>
                <h4 className='nav-link'>Buses y Viajes</h4>
                <h4 className='nav-link'>Horarios y Precios</h4>
                <div className='nav-user'>
                    {user ? (
                        <span className='welcome-message'>
                            <h4>Bienvenido {user.name}</h4>
                        </span>
                    ) : (
                        <CustomBtn text='Login'  onClick={()=>navigate('/pages/Login')}/>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
