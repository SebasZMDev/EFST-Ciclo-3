import { useState } from "react";
import CustomBtn from "./CustomBtn";

const PasajeroSelector = () => {
    const BusParseado = localStorage.getItem("BusElegido");
    const [BusElegido, setBusElegido] = useState(JSON.parse(BusParseado ? BusParseado : ''));

    const EstosAsientos = BusElegido.asientosAbajo.concat(BusElegido.asientosArriba);

    return (
        <>
            {EstosAsientos.map((element: boolean, index: number) => {
                if (element === true) {
                    return (
                        <div key={index} style={{ backgroundColor: '#202020' }}>
                            {element.toString() + " " + index}
                        </div>
                    );
                }
                return null;
            })}
            <CustomBtn text="wa" onClick={() => console.log()} />
        </>
    );
}

export default PasajeroSelector;
