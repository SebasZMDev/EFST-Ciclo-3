import { useState } from "react";
import CustomBtn from "./CustomBtn";
import { BusInfo, TicketInfo } from "../App";
import {v4 as uuidv4} from "uuid"

type Props = {
  pasoCambiado: (valor:boolean)=>boolean;
}

const PasajeroSelector = ({pasoCambiado}:Props) => {
    const BusParseado = localStorage.getItem("BusElegido");
    const [BusElegido, setBusElegido] = useState(JSON.parse(BusParseado ? BusParseado : ''));

    const EstosAsientos: TicketInfo[] = [];
    const TodosLosAsientos = BusElegido.asientosAbajo.concat(BusElegido.asientosArriba);
    TodosLosAsientos.forEach((element: boolean, index: number) => {
        if (element === true) {
            const nuevoTicket: TicketInfo = {
                idTicket: uuidv4(),
                piso: index <= 24 ? 1 : 2,
                asiento: index,
                origen: BusElegido.origen,
                destino: BusElegido.destino,
                fecha: BusElegido.fecha,
                precio: index <= 24 ? 'S/60' : 'S/80',
            };
            EstosAsientos.push(nuevoTicket);
        }
    })

    const HabilitarCambio = () => {
      pasoCambiado(true)
    }

    return (
        <>
            <br/>
            <h2 style={{color:'black'}}>Boletos Elegidos:</h2>
            <div className="ps-boletos-container">
            {EstosAsientos.map((element:TicketInfo) =>{
                if (element){
                    return (
                      <div key={element.idTicket} className="ps-boleto">
                        <div className="ps-boleto-header">
                          <h4 className="ps-boleto-numero">
                            Asiento: {element.asiento}
                          </h4>
                          <h4 className="ps-boleto-piso">
                            Piso: {element.piso}
                          </h4>
                        </div>
                        <div className="ps-boleto-body">
                        <h4 className="ps-boleto-origen">
                            Origen: {element.origen}
                          </h4>
                          <h4 className="ps-boleto-destino">
                            Destino: {element.destino}
                          </h4>
                        </div>
                        <div className="ps-boleto-footer">
                            <h5>Codigo Boleto: {element.idTicket}</h5>
                            <h4 className="ps-boleto-precio">
                            Precio: {element.precio}
                            </h4>
                        </div>
                      </div>
                    );
                }else{
                    return null;
                }
            }
            )}
            </div>
            <br/>
            <CustomBtn escala="scale(1.25)" text="Siguiente" onClick={()=>HabilitarCambio()}/>
        </>
    );
}

export default PasajeroSelector;