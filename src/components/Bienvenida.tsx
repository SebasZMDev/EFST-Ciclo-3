import { useState, useEffect } from 'react';
import './ComStyles.css';

const Bienvenida = () => {
    const imgArray = ['/public/landscape/img.jpg', '/public/landscape/img2.jpg', '/public/landscape/img3.png'];
    const [contador, setContador] = useState(0);
    const [estaImagen, setEstaImagen] = useState(imgArray[0]);

    useEffect(() => {
    const intervalo = setInterval(() => {
        // Actualiza el contador, incrementando su valor
        // Utiliza el valor anterior del contador (prevContador) para asegurar que la actualización sea correcta
        // El uso de % imgArray.length asegura que el contador se reinicie a 0 cuando alcanza el número de imágenes
        setContador(prevContador => (prevContador + 1) % imgArray.length);
    }, 3000); // Duración del intervalo
    // Función de limpieza que se ejecuta cuando el componente se desmonta
    // Limpia el intervalo para evitar que siga ejecutándose en segundo plano
        return () => clearInterval(intervalo);
    }, []); // El segundo argumento vacío indica que este efecto solo se ejecuta una vez al montar


    useEffect(() => {
    // Actualiza la imagen actual según el nuevo valor del contador
        setEstaImagen(imgArray[contador]);
    }, [contador]); // El segundo argumento indica que este efecto se ejecuta cuando el 'contador' cambia


    return (
        <div className='bienvenida-container'>
            <img className='bienvenido-bg' src={estaImagen}></img>
            <div>
                <img className='bienvenida-img' src="/public/logo.png" alt='Logo Transporte Cavassa' />
                <h3 className='bienvenida-msg'>Bienvenido a Transporte Cavassa</h3>
                <h4 className='bienvenida-msg'>
                    Una empresa de buses interprovinciales dedicada a ofrecer viajes seguros y cómodos a lo largo del país.
                </h4>
            </div>
        </div>
    );
};

export default Bienvenida;
