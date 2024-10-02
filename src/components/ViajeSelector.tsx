import { useState } from "react"

const ViajeSelector = () => {

    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaIda, setFechaIda] = useState<Date>();
    const [fechaRegreso, setFechaRegreso] = useState<Date>();

    const handlePlace = (value: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        if (value === 'origen') {
          setOrigen(e.target.value);
        }
        if (value === 'destino') {
            setDestino(e.target.value);
          }
      };

    const handleDates = (value:string, e:React.ChangeEvent<HTMLInputElement>) =>{
        const date = new Date(e.target.value);
        if (value === 'ida') {
            setFechaIda(date);
          }
          if (value === 'regreso') {
            setFechaRegreso(date);
            }
    }

    const ShowCalendar = (e: React.MouseEvent<HTMLDivElement>) => {
        const inputElement = e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement;
        if (inputElement) {
          inputElement.showPicker(); // Abre el calendario
        }
    };

    return (
        <div className="vs-general-container">
            <div className="vs-item-div">
                <img className="vs-icon" src="/public/ciudad.png"/>
                <h4>Origen</h4>
                <select onChange={(e) => handlePlace('origen', e)} className="vs-input">
                    <option value="0">ORIGEN</option>
                    <option value="1">LIMA</option>
                    <option value="2">HUARAZ</option>
                    <option value="3">CARAZ</option>
                    <option value="4">PIURA</option>
                    <option value="5">SULLANA</option>
                    <option value="6">CHIQUIAN</option>
                    <option value="7">LA UNION</option>
                    <option value="8">PACHAPAQUI</option>
                    <option value="9">HUALLANCA</option>
                    <option value="10">HUANZALA</option>
                    <option value="11">CARHUAZ</option>
                    <option value="12">MARCARA</option>
                    <option value="13">MANCOS</option>
                    <option value="14">YUNGAY</option>
                    <option value="15">RANRAHIRCA</option>
                    <option value="16">AQUIA</option>
                    <option value="18">TINGUA</option>
                    <option value="19">PAMPAN</option>
                    <option value="20">RECUAY</option>
                    <option value="24">BARRANCA</option>
                    <option value="25">HUAURA</option>
                    <option value="28">CHICLAYO</option>
                    <option value="29">TRUJILLO</option>
                    <option value="30">CONOCHA</option>
                    <option value="32">LAMBAYEQUE</option>
                    <option value="35">CATACAOS</option>
                    <option value="36">LA ARENA</option>
                    <option value="37">LA UNION-PIURA</option>
                    <option value="38">SECHURA</option>
                    <option value="50">CUSCO</option>
                    <option value="51">NAZCA</option>
                    <option value="52">PUQUIO</option>
                    <option value="53">CHALHUANCA</option>
                    <option value="54">ABANCAY</option>
                    <option value="56">TAMBOGRANDE</option>
                    <option value="65">ICA</option>
                    <option value="71">LAS LOMAS</option>
                    <option value="122">PAITA</option>
                </select>
            </div>
            <div className="vs-item-div">
                <img className="vs-icon" src="/public/cordillera.png"/>
                <h4>Destino</h4>
                <select onChange={(e) => handlePlace('destino', e)} className="vs-input">
                    <option value="0">ORIGEN</option>
                    <option value="1">LIMA</option>
                    <option value="2">HUARAZ</option>
                    <option value="3">CARAZ</option>
                    <option value="4">PIURA</option>
                    <option value="5">SULLANA</option>
                    <option value="6">CHIQUIAN</option>
                    <option value="7">LA UNION</option>
                    <option value="8">PACHAPAQUI</option>
                    <option value="9">HUALLANCA</option>
                    <option value="10">HUANZALA</option>
                    <option value="11">CARHUAZ</option>
                    <option value="12">MARCARA</option>
                    <option value="13">MANCOS</option>
                    <option value="14">YUNGAY</option>
                    <option value="15">RANRAHIRCA</option>
                    <option value="16">AQUIA</option>
                    <option value="18">TINGUA</option>
                    <option value="19">PAMPAN</option>
                    <option value="20">RECUAY</option>
                    <option value="24">BARRANCA</option>
                    <option value="25">HUAURA</option>
                    <option value="28">CHICLAYO</option>
                    <option value="29">TRUJILLO</option>
                    <option value="30">CONOCHA</option>
                    <option value="32">LAMBAYEQUE</option>
                    <option value="35">CATACAOS</option>
                    <option value="36">LA ARENA</option>
                    <option value="37">LA UNION-PIURA</option>
                    <option value="38">SECHURA</option>
                    <option value="50">CUSCO</option>
                    <option value="51">NAZCA</option>
                    <option value="52">PUQUIO</option>
                    <option value="53">CHALHUANCA</option>
                    <option value="54">ABANCAY</option>
                    <option value="56">TAMBOGRANDE</option>
                    <option value="65">ICA</option>
                    <option value="71">LAS LOMAS</option>
                    <option value="122">PAITA</option>
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