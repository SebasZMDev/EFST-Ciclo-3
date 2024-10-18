import { useState } from "react"
import useModal from "../hooks/useModal";
import CustomBtn from "./CustomBtn";
import { BusInfo } from "../App";
import { v4 as uuidv4 } from 'uuid';


type Props = {
  pasoCambiado: (valor:boolean)=>boolean;
}

const ViajeSelector = ({pasoCambiado}:Props) => {
    const { openModal, Modal} = useModal();

    const [origen, setOrigen] = useState('');
    const [destino, setDestino] = useState('');
    const [fechaIda, setFechaIda] = useState<Date>();
    const [fechaRegreso, setFechaRegreso] = useState<Date>();
    const [resultados, setResultados] = useState<BusInfo[]>();
    const [busElegido, setBusElegido] = useState<BusInfo>();
    const [mapa, setMapa] = useState('')
    const [imgBus, setImgBus] = useState('')

    const [modalAbierto, setModalAbierto] = useState(false);
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

    const HabilitarCambio = () => {
      pasoCambiado(true)
    }

    const displayModal = () => {
      setModalAbierto(!modalAbierto)
    }

    const RandomMapAndImg = () => {
      const Mapas = ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.911885634131!2d-77.10774511098862!3d-11.841441456014763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d42072d91a25%3A0x8e08d45ecbd94d75!2sTurismo%20Cavassa!5e0!3m2!1ses-419!2spe!4v1729206447303!5m2!1ses-419!2spe","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.553679386112!2d-77.05809172517554!3d-12.00535438822818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfeac2b22daf%3A0x3348983025e1fe5a!2sGran%20Terminal%20Terrestre%20Plaza%20Norte!5e0!3m2!1ses!2spe!4v1729133852498!5m2!1ses!2spe","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.553679386112!2d-77.05809172517554!3d-12.00535438822818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfeac2b22daf%3A0x3348983025e1fe5a!2sGran%20Terminal%20Terrestre%20Plaza%20Norte!5e0!3m2!1ses!2spe!4v1729133852498!5m2!1ses!2spe"]
      const Imagenes = ["/public/landscape/bus1.jpg","/public/landscape/bus2.jpg","/public/landscape/bus3.jpg"]
      const mapaRandom = Math.floor(Math.random()*3)
      const imagenRandom = Math.floor(Math.random()*3)
      setMapa(Mapas[mapaRandom])
      setImgBus(Imagenes[imagenRandom])
    }

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
        const date = new Date(e.target.value + "T00:00:00");
        if (value === 'ida') {
            setFechaIda(date);
        }
        if (value === 'regreso') {
            setFechaRegreso(date);
        }
    };

    const ShowCalendarIda = (e: React.MouseEvent<HTMLDivElement>) => {
        const inputElement = e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement;
        if (inputElement) {
            const hoy = new Date().toISOString().split('T')[0];
            inputElement.setAttribute('min', hoy);
            inputElement.showPicker();
        }
      };

      const ShowCalendarVuelta = (e: React.MouseEvent<HTMLDivElement>) => {
        const inputElement = e.currentTarget.querySelector('input[type="date"]') as HTMLInputElement;
        if (inputElement&&fechaIda){
            const minimo = fechaIda.toISOString().split('T')[0];
            inputElement.setAttribute('min', minimo);
            inputElement.showPicker();
        }else if(inputElement) {
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
        if (origen && destino && fechaIda){
            if (origen==destino){
                openModal("El Origen y Destino no pueden ser el mismo")
                return
            }
            if (fechaRegreso){
                if (fechaIda<fechaRegreso) {
                  BuscarBus();
                    return
                }else {
                    openModal("Ingrese una fecha valida");
                    return
                }
            }
            BuscarBus();
        }
    }

    const CreadorBus = () => {

      const amenities = [
        "Wi-Fi",
        "Aire acondicionado",
        "Asientos reclinables",
        "Cargadores USB",
        "Baño",
        "Televisión",
        "Portaequipajes",
        "Cinturones de seguridad",
        "Luz de lectura",
      ];
      const getAmenities = () => {
        const randomIndex = Math.floor(Math.random() * amenities.length);
        return amenities[randomIndex];
      };
      const FechaDeHoy = new Date();

      const nuevoBus: BusInfo = {
        idBus: uuidv4(),
        origen: origen,
        destino: destino,
        partida: FechaDeHoy.getHours().toString() + ":00",
        llegada: (FechaDeHoy.getHours() + 4).toString() + ":00",
        capacidad: 60,
        asientosArriba: Array(36).fill(false),
        asientosAbajo: Array(24).fill(false),
        tipo: 'Buscama',
        amenities: [getAmenities()+", ", getAmenities()],
      };
      return (nuevoBus);
    };

    const BuscarBus = () => {
      if (origen&&destino&&fechaIda) {
        const EstosBuses = [CreadorBus(),CreadorBus(),CreadorBus(),]
        setResultados(EstosBuses);
      }
    }

    return (
      <>
        <div style={{background:'#404040', width:'90%', margin:'0 auto'}}>
            <h2>Elija su viaje</h2>
        </div>
        <div className="vs-general-container">
          <div className="vs-item-div">
            <img
              onClick={ShowValues}
              className="vs-icon"
              src="/public/ciudad.png"
            />
            <h4>Origen</h4>
            <select
              onChange={(e) => handlePlace("origen", e)}
              className="vs-input"
            >
              <option value={0}>ORIGEN</option>
              {Lugares.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.lugar}
                </option>
              ))}
            </select>
          </div>
          <div className="vs-item-div">
            <img className="vs-icon" src="/public/cordillera.png" />
            <h4>Destino</h4>
            <select
              onChange={(e) => handlePlace("destino", e)}
              className="vs-input"
            >
              <option value={0}>DESTINO</option>
              {Lugares.map((element) => (
                <option key={element.id} value={element.id}>
                  {element.lugar}
                </option>
              ))}
            </select>
          </div>
          <div className="vs-item-div" onClick={ShowCalendarIda}>
            <img className="vs-icon" src="/public/autobus.png" />
            <h4>Fecha de Partida</h4>
            <input
              onChange={(e) => handleDates("ida", e)}
              className="vs-input"
              type="date"
            />
          </div>
          <div className="vs-item-div" onClick={ShowCalendarVuelta}>
            <img className="vs-icon" src="/public/autobus2.png" />
            <h4>Fecha de Regreso (Opcional)</h4>
            <input
              onChange={(e) => handleDates("regreso", e)}
              className="vs-input"
              type="date"
            />
          </div>
        </div>
        <div>
          <div
            className="vs-confirm-div"
            style={{
              display:
                origen || destino || fechaIda || fechaRegreso ? "grid" : "none",
              gridTemplateColumns: fechaRegreso
                ? "20% 20% 20% 20% 20%"
                : "25% 25% 25% 25%",
            }}
          >
            {origen ? (
              <h5 className="vs-confirm-item">Origen: {origen}</h5>
            ) : (
              ""
            )}
            {destino ? (
              <h5 className="vs-confirm-item">Destino: {destino}</h5>
            ) : (
              ""
            )}
            {fechaIda ? (
              <h5 className="vs-confirm-item">
                Fecha de Ida:{" "}
                {fechaIda.getDate() +
                  "/" +
                  fechaIda.getMonth() +
                  "/" +
                  fechaIda.getFullYear()}
              </h5>
            ) : (
              ""
            )}
            {fechaRegreso ? (
              <h5 className="vs-confirm-item">
                Fecha de Regreso:{" "}
                {fechaRegreso.getDate() +
                  "/" +
                  fechaRegreso.getMonth() +
                  "/" +
                  fechaRegreso.getFullYear()}
              </h5>
            ) : (
              ""
            )}
            {origen && destino && fechaIda ? (
              <CustomBtn text='confirmar' onClick={Verificador}/>
            ) : (
              ""
            )}
          </div>
        </div>
        {resultados?(
        <div className="vs-resultados-container">
          <div className="vs-resultados-div" style={{backgroundColor:'#202020'}}><h4>Embarque y Partida</h4><h4>Arribo y Llegada</h4><h4>Precios</h4><h4>{' '}</h4></div>
          {resultados.map((element)=>
            <div className="vs-resultados-div" key={element.idBus}>
                <div>
                  <p>Terminal de {element.origen}</p>
                  <p>{fechaIda ? fechaIda.toLocaleDateString() + ' | ' : ''}{element.partida}</p>
                </div>
                <div>
                  <p>Terminal de {element.destino}</p>
                  <p>{fechaIda ? fechaIda.toLocaleDateString() + ' | ' : ''}{element.llegada}</p>
                </div>
                <div>
                  <p>Precio Segundo Piso: S/60</p>
                  <p>Precio Primer Piso: S/80</p>
                </div>
                <CustomBtn text='Mas informacion' onClick={()=>{setModalAbierto(true),setBusElegido(element),RandomMapAndImg()}} escala="scale(0.85)" />
                <CustomBtn text='Elegir!' onClick={HabilitarCambio} escala="scale(0.85)" />
            </div>
          )}
        </div>):''}
        <div onClick={displayModal} className="modal-general" style={{display:modalAbierto?'':'none'}}>
            <div className="vs-modal-bg">
            </div>
            <div className="vs-modal-div">
                {busElegido?
                (
                <div className="fucktags">
                  <div className="bus-info">
                    <h4>Embarque: Terminal de <span>{busElegido.origen}</span></h4>
                    <h4>Arribo: Terminal de <span>{busElegido.destino}</span></h4>
                    <h4>Partida: <span>{busElegido.partida}</span></h4>
                    <h4>Llegada: <span>{busElegido.llegada}</span></h4>
                    <h4>Precio Segundo Piso: <span>S/60</span></h4>
                    <h4>Precio Primer Piso: <span>S/80</span></h4>
                    <h4>Tipo: <span>{busElegido.tipo}</span></h4>
                    <h4>Comodidades: <span>{busElegido.amenities}</span></h4>
                  </div>
                  <div  className="bus-details">
                    <iframe src={mapa} width="600" height="450" loading="lazy"></iframe>
                    <img src={imgBus}/>
                  </div>
                </div>)

                :(<h4>No elegiste ningun Bus W</h4>)}
                <br/>
                <CustomBtn text='Cerrar' onClick={displayModal}/>
            </div>
        </div>
        <Modal />
      </>
    );
}

export default ViajeSelector