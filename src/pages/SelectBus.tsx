import ViajeSelector from "../components/ViajeSelector"
import NavBar from "../components/NavBar"
import './SelectBus.css'
import { useState } from "react"
import AsientoSelector from "../components/AsientoSelector"
import PasajeroSelector from "../components/PasajeroSelector"
import PaginaPago from "../components/PaginaPago"

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
            <AsientoSelector pasoCambiado={ManejarCambioPaso}/>
            ):''
            }
            {paso==2?
            (
            <PasajeroSelector  pasoCambiado={ManejarCambioPaso}/>
            ):''
            }
            {paso==3?
            (
            <PaginaPago/>
            ):''
            }
        </>
    )
}

export default SelectBus