import NavBar from '../components/NavBar';
import ViajeSelector from '../components/ViajeSelector';
import Bienvenida from '../components/Bienvenida';

const Home = () =>{
    return(
        <div>
            <NavBar/>
            <Bienvenida/>
            <ViajeSelector/>
        </div>
    )
}

export default Home