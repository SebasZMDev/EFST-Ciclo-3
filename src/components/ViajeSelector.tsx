import { useState } from "react"

const ViajeSelector = () => {

    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaIda, setFechaIda] = useState<Date>();
    const [fechaRegreso, setFechaRegreso] = useState<Date>();

    const Lugares = [
        { id: 1, lugar: "LIMA" },
        { id: 2, lugar: "HUARAZ" },
        { id: 3, lugar: "CARAZ" },
        { id: 4, lugar: "PIURA" },
        { id: 5, lugar: "SULLANA" },
        { id: 6, lugar: "CHIQUIAN" },
        { id: 7, lugar: "LA UNION" },
        { id: 8, lugar: "PACHAPAQUI" },
        { id: 9, lugar: "HUALLANCA" },
        { id: 10, lugar: "HUANZALA" },
        { id: 11, lugar: "CARHUAZ" },
        { id: 12, lugar: "MARCARA" },
        { id: 13, lugar: "MANCOS" },
        { id: 14, lugar: "YUNGAY" },
        { id: 15, lugar: "RANRAHIRCA" },
        { id: 16, lugar: "AQUIA" },
        { id: 17, lugar: "TINGUA" },
        { id: 18, lugar: "PAMPAN" },
        { id: 19, lugar: "RECUAY" },
        { id: 20, lugar: "BARRANCA" },
        { id: 21, lugar: "HUAURA" },
        { id: 22, lugar: "CHICLAYO" },
        { id: 23, lugar: "TRUJILLO" },
        { id: 24, lugar: "CONOCHA" },
        { id: 25, lugar: "LAMBAYEQUE" },
        { id: 26, lugar: "CATACAOS" },
        { id: 27, lugar: "LA ARENA" },
        { id: 28, lugar: "LA UNION-PIURA" },
        { id: 29, lugar: "SECHURA" },
        { id: 30, lugar: "CUSCO" },
        { id: 31, lugar: "NAZCA" },
        { id: 32, lugar: "PUQUIO" },
        { id: 33, lugar: "CHALHUANCA" },
        { id: 34, lugar: "ABANCAY" },
        { id: 35, lugar: "TAMBOGRANDE" },
        { id: 36, lugar: "ICA" },
        { id: 37, lugar: "LAS LOMAS" },
        { id: 38, lugar: "PAITA" },
      ];


    const handlePlace = (value: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        if (value === 'origen') {
          setOrigen(e.target.value);
        }
        if (value === 'destino') {
            setDestino(e.target.value);
          }
      };

      const handleDates = (value: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const today = new Date
        const date = new Date(e.target.value + "T00:00:00");
        if (date.getDate()<today.getDate() || date.getMonth()<today.getMonth()){
            alert("Elija una fecha valida")
        }
        if (fechaIda){
            if (fechaIda.getDate()<today.getDate() || fechaIda.getMonth()<today.getMonth()){
                alert("Elija una fecha valida")
            }
            if (fechaIda.getDate()>date.getDate() || fechaIda.getMonth()>date.getMonth()){
                alert("Elija una fecha valida")
            }
        }
        console.log(date.getDate());
        console.log(date.getMonth() + 1);
        if (value === 'ida') {
            setFechaIda(date);
        }
        if (value === 'regreso') {
            setFechaRegreso(date);
        }
    };


    const ShowCalendar = (e: React.MouseEvent<HTMLDivElement>) => {
        const inputElement = e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement;
        if (inputElement) {
          inputElement.showPicker(); // Abre el calendario
        }
    };

    const ShowValues = () =>{
        console.log(
            "Origen"+ origen,
            "Destino"+destino,
            "Fecha de Ida"+fechaIda,
            "Fecha de Retorno"+fechaRegreso,
        )
    }

    return (
        <div className="vs-general-container">
            <div className="vs-item-div">
                <img onClick={ShowValues} className="vs-icon" src="/public/ciudad.png"/>
                <h4>Origen</h4>
                <select onChange={(e) => handlePlace('origen', e)} className="vs-input">
                    <option value={0}>Origen</option>
                    {Lugares.map((element)=>(
                        <option key={element.id} value={element.id}>{element.lugar}</option>
                    ))}
                </select>
            </div>
            <div className="vs-item-div">
                <img className="vs-icon" src="/public/cordillera.png"/>
                <h4>Destino</h4>
                <select onChange={(e) => handlePlace('destino', e)} className="vs-input">
                <option value={0}>Destino</option>
                    {Lugares.map((element)=>(
                        <option key={element.id} value={element.id}>{element.lugar}</option>
                    ))}
                </select>
            </div>
            <div className="vs-item-div" onClick={ShowCalendar}>
                <img className="vs-icon" src="/public/autobus.png"/>
                <h4>Fecha de Partida</h4>
                <input onChange={(e)=>handleDates('ida', e)} className="vs-input" type="date" />
            </div>
            <div className="vs-item-div" onClick={ShowCalendar}>
                <img className="vs-icon" src="/public/autobus2.png"/>
                <h4>Fecha de Regreso (Opcional)</h4>
                <input onChange={(e)=>handleDates('regreso', e)}  className="vs-input" type="date" />
            </div>
        </div>
    )
}

export default ViajeSelector