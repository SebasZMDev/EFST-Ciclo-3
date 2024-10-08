import ViajeSelector from "../components/ViajeSelector"
import NavBar from "../components/NavBar"
import './SelectBus.css'
import { useEffect, useState } from "react"

const SelectBus = () => {

    const [paso, setPaso] = useState(0);

    useEffect(()=>{
        if (paso>3){
            setPaso(0)
        }
    },[paso])
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
                <ViajeSelector/>

            ):''
            }
            {paso==1?
            (
            <>
                <h2 style={{color:'black'}}>Aqui se eligen asientos</h2>
                <h4 style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eaque, quibusdam fugit
                    velit eveniet debitis laudantium quis repellat vero, praesentium culpa consectetur natus! Adipisci delectus harum
                    necessitatibus cumque. Laudantium, saepe.
                </h4>
            </>
            ):''
            }
            {paso==2?
            (<>
                <h2 style={{color:'black'}}>Pajeros</h2>
                <h4 style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto eaque, quibusdam fugit
                    velit eveniet debitis laudantium quis repellat vero, praesentium culpa consectetur natus! Adipisci delectus harum
                    necessitatibus cumque. Laudantium, saepe.
                </h4>
            </>):''
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
            <button onClick={()=>setPaso(paso+1)}>Siguiente</button>
        </>
    )
}

export default SelectBus