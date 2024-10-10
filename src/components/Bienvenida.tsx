import { useState, useEffect } from 'react';
import './ComStyles.css';
import CustomBtn from './CustomBtn';

const Bienvenida = () => {
    const imgArray = ['/public/landscape/img.jpg', '/public/landscape/img2.jpg', '/public/landscape/img3.png'];
    const [contador, setContador] = useState(0);
    const [estaImagen, setEstaImagen] = useState(imgArray[0]);

    useEffect(() => {
    const intervalo = setInterval(() => {
        setContador(prevContador => (prevContador + 1) % imgArray.length);
    }, 3000);
        return () => clearInterval(intervalo);
    }, []);


    useEffect(() => {
        setEstaImagen(imgArray[contador]);
    }, [contador]);


    return (
        <div className='bienvenida-container'>
            <img className='bienvenido-bg' src={estaImagen}></img>
            <div>
                <img className='bienvenida-img' src="/public/logo.png" alt='Logo Transporte Cavassa' />
                <h3 className='bienvenida-msg'>Bienvenido a Transporte Cavassa</h3>
                <h4 className='bienvenida-minimsg'>
                Cavassa es una empresa de transporte interprovincial que se dedica a brindar experiencias de viaje seguras, cómodas y confiables a lo largo de todo el país. Nos especializamos en conectar diversas ciudades y regiones, ofreciendo a nuestros pasajeros un servicio de primera calidad con el compromiso de hacer cada trayecto lo más placentero posible. Nuestra moderna flota de buses está equipada con tecnología avanzada para asegurar un viaje tranquilo, mientras que nuestros conductores altamente capacitados garantizan la máxima seguridad en cada recorrido.
                </h4>
                <CustomBtn text='Comprar un pasaje' onClick={()=>console.log('sex')}/>
            </div>
        </div>
    );
};

export default Bienvenida;
