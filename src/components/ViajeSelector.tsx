import { useState } from "react"

const ViajeSelector = () => {

    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaIda, setFechaIda] = useState<Date>();
    const [fechaRegreso, setFechaRegreso] = useState<Date>();

    const Lugares = [
        { id: 1, lugar: "ABANCAY" },
        { id: 2, lugar: "AQUIA" },
        { id: 3, lugar: "BARRANCA" },
        { id: 4, lugar: "CARAZ" },
        { id: 5, lugar: "CARHUAZ" },
        { id: 6, lugar: "CATACAOS" },
        { id: 7, lugar: "CHALHUANCA" },
        { id: 8, lugar: "CHICLAYO" },
        { id: 9, lugar: "CHIQUIAN" },
        { id: 10, lugar: "CHIMBOTE" },
        { id: 11, lugar: "CONOCHA" },
        { id: 12, lugar: "CUSCO" },
        { id: 13, lugar: "HUALLANCA" },
        { id: 14, lugar: "HUANZALA" },
        { id: 15, lugar: "HUARAZ" },
        { id: 16, lugar: "HUAURA" },
        { id: 17, lugar: "ICA" },
        { id: 18, lugar: "LA ARENA" },
        { id: 19, lugar: "LA UNION" },
        { id: 20, lugar: "LA UNION-PIURA" },
        { id: 21, lugar: "LAS LOMAS" },
        { id: 22, lugar: "LAMBAYEQUE" },
        { id: 23, lugar: "LIMA" },
        { id: 24, lugar: "MANCOS" },
        { id: 25, lugar: "MARCARA" },
        { id: 26, lugar: "NAZCA" },
        { id: 27, lugar: "PACHAPAQUI" },
        { id: 28, lugar: "PAITA" },
        { id: 29, lugar: "PAMPAN" },
        { id: 30, lugar: "PIURA" },
        { id: 31, lugar: "PUQUIO" },
        { id: 32, lugar: "RANRAHIRCA" },
        { id: 33, lugar: "RECUAY" },
        { id: 34, lugar: "SECHURA" },
        { id: 35, lugar: "SULLANA" },
        { id: 36, lugar: "TAMBOGRANDE" },
        { id: 37, lugar: "TINGUA" },
        { id: 38, lugar: "TRUJILLO" },
        { id: 39, lugar: "YUNGAY" }
    ];

    const handlePlace = (value: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        if (value === 'origen') {
            const index = Number(e.target.value);
            const objt = Lugares[index-1];
            setOrigen(objt.lugar)
        }
        if (value === 'destino') {
            const index = Number(e.target.value);
            const objt = Lugares[index-1];
            setDestino(objt.lugar);
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
          const hoy = new Date().toISOString().split('T')[0];
          inputElement.setAttribute('min', hoy);
          inputElement.showPicker();
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

    const Verificador = () => {
        if (fechaIda&&fechaRegreso){
            if (fechaIda.getMonth()>fechaRegreso.getMonth()){
                alert("Elija una fecha valida")
            }else{
                if (fechaIda.getDate()>fechaRegreso.getDate()){
                    alert("Elija una fecha valida")
                }
            }
        }
    }

    return (
        <>
            <div className="vs-general-container">
            <div className="vs-item-div">
                <img onClick={ShowValues} className="vs-icon" src="/public/ciudad.png"/>
                <h4>Origen</h4>
                <select onChange={(e) => handlePlace('origen', e)} className="vs-input">
                    <option value={0}>ORIGEN</option>
                    {Lugares.map((element)=>(
                        <option key={element.id} value={element.id}>{element.lugar}</option>
                    ))}
                </select>
            </div>
            <div className="vs-item-div">
                <img className="vs-icon" src="/public/cordillera.png"/>
                <h4>Destino</h4>
                <select onChange={(e) => handlePlace('destino', e)} className="vs-input">
                <option value={0}>DESTINO</option>
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
            <div>
                <div className="vs-confirm-div" style={{display:origen || destino || fechaIda || fechaRegreso?'grid':'none', gridTemplateColumns:fechaRegreso?'20% 20% 20% 20% 20%':'25% 25% 25% 25%'}}>
                    {
                        origen?(
                        <h5 className="vs-confirm-item">
                            Origen: {origen}
                        </h5>):''
                    }
                    {
                        destino?(
                        <h5 className="vs-confirm-item">
                            Destino: {destino}
                        </h5>):''
                    }
                    {
                        fechaIda?(
                        <h5 className="vs-confirm-item">
                            Fecha de Ida: {fechaIda.getDate()+"/"+fechaIda.getMonth()+"/"+fechaIda.getFullYear()}
                        </h5>):''
                    }
                    {
                        fechaRegreso?(
                        <h5 className="vs-confirm-item">
                            Fecha de Regreso: {fechaRegreso.getDate()+"/"+fechaRegreso.getMonth()+"/"+fechaRegreso.getFullYear()}
                        </h5>):''
                    }
                    {origen && destino && fechaIda?
                        (<button>Confirmar</button>):''
                    }
                </div>
            </div>
        </>
    )
}

export default ViajeSelector