import ViajeSelector from "../components/ViajeSelector"
import NavBar from "../components/NavBar"
import './SelectBus.css'
import { useState } from "react"
import AsientoSelector from "../components/AsientoSelector"
import PasajeroSelector from "../components/PasajeroSelector"

const SelectBus = () => {

    const [paso, setPaso] = useState(0);

    const ManejarCambioPaso = (valor: boolean) =>{
        if (valor==true) {
            setPaso(paso+1);
            return true;
        }else {
            setPaso(paso-1);
            return false;
        }
    }

    return (
        <>
            <NavBar/>
            <div>
                <div className="paso-div">
                    <h4 className={paso==0?'paso-elegido':'paso-item'} onClick={()=>setPaso(0)}>
                        Ruta
                    </h4>
                    <h4 className={paso==1?'paso-elegido':'paso-item'} onClick={()=>setPaso(1)}>
                        Asientos
                    </h4>
                    <h4 className={paso==2?'paso-elegido':'paso-item'} onClick={()=>setPaso(2)}>
                        Pasajeros
                    </h4>
                    <h4 className={paso==3?'paso-elegido':'paso-item'} onClick={()=>setPaso(3)}>
                        Pago
                    </h4>
                </div>
            </div>
            {paso==0?
            (
                <ViajeSelector pasoCambiado={ManejarCambioPaso}/>
            ):''
            }
            {paso==1?
            (
            <AsientoSelector/>
            ):''
            }
            {paso==2?
            (
            <PasajeroSelector/>
            ):''
            }
            {paso==3?
            (
            <>
                <h2 style={{color:'black'}}>Confirmacion de pago</h2>
                <h4 style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eaque, quibusdam fugit
                    velit eveniet debitis laudantium quis repellat vero, praesentium culpa consectetur natus! Adipisci delectus harum
                    necessitatibus cumque. Laudantium, saepe.
                </h4>
            </>
            ):''
            }
        </>
    )
}

export default SelectBus