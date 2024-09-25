import { getUserInfo } from '../hooks/getUserInfo';
import NavBar from '../components/navBar';


const Home = () =>{
    const {getUser} = getUserInfo();
    return(
        <div>
            <NavBar/>
            WELCOME TO HOME!! {getUser().name}
        </div>
    )
}

export default Home