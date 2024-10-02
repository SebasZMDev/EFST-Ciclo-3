import { getUserInfo } from '../hooks/getUserInfo';
import NavBar from '../components/NavBar';
import ViajeSelector from '../components/ViajeSelector';


const Home = () =>{
    const {getUser} = getUserInfo();
    return(
        <div>
            <NavBar/>
            <ViajeSelector/>
        </div>
    )
}

export default Home