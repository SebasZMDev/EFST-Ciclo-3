import { useEffect, useState } from "react";
import "./ComStyles.css";
import CustomBtn from "./CustomBtn";
import { BusInfo, TicketInfo } from "../App";

type Props = {
  pasoCambiado: (valor:boolean)=>boolean;
}

const AsientoSelector = ({pasoCambiado}:Props) => {
  const BusParseado = localStorage.getItem("BusElegido")
  const [BusElegido, setBusElegido] =  useState(JSON.parse(BusParseado?BusParseado:''))
  const [asientos, setAsientos] = useState<number[]>();
  const [piso, setPiso] = useState(2);
  const ElegirAsiento = (e: React.MouseEvent<HTMLImageElement>,valor: number) => {
    const YaElegido = asientos?.find((element)=> element==valor)
    if (YaElegido) {
        e.currentTarget.src = "/public/seat.png"
        setAsientos(asientos?.filter((element)=>element !== valor))
    }else {
        e.currentTarget.src = "/public/seatgreen.png";
        if (asientos) {
          setAsientos([...asientos, valor]);
        }else {
            setAsientos([valor])
        }
    }
  };

  const HabilitarCambio = () => {
    pasoCambiado(true)
  }

  const ActualizarBus = (nuevoBus:BusInfo) =>{
    localStorage.setItem("BusElegido", JSON.stringify(nuevoBus))
    console.log(BusElegido)
  }

  const ActualizarAsientos = () => {
    const nuevoBusElegido = { ...BusElegido };
    asientos?.forEach((element) => {
      if (element < 25) {
        nuevoBusElegido.asientosAbajo[element] = true;
      } else {
        nuevoBusElegido.asientosArriba[element - 24] = true;
      }
    });
    setBusElegido(nuevoBusElegido);
    ActualizarBus(nuevoBusElegido);
  };


  return (
    <>
      <div className="as-div">
        <h2 className="as-seat-tittle">Seleccione de Asientos</h2>
        <div className="as-seat-subtittles">
          <h2
            onClick={() => setPiso(1)}
            className={piso == 1 ? "as-piso-seleccionado" : ""}
          >
            Piso 1:
          </h2>
          <h2
            onClick={() => setPiso(2)}
            className={piso == 2 ? "as-piso-seleccionado" : ""}
          >
            Piso 2:
          </h2>
        </div>

        {piso == 1 ? (
          <div className="as-seat-display">
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 1)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">01</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 5)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">05</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 9)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">09</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 13)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">13</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 17)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">17</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 21)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">21</h4>
            </div>
            <img src="/public/bath.png" className="as-stair-icon" />
            <span></span>
            <span></span>
            <img
              src="/public/volante.png"
              className="as-stair-icon"
              style={{ transform: "rotate(90deg)" }}
            />

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 2)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">02</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 6)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">06</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 10)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">10</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 14)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">14</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 18)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">18</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 22)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">22</h4>
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <span></span>
            <span></span>
            <img src="/public/television.png" className="as-tv-icon" />
            <span></span>
            <span></span>
            <img src="/public/television.png" className="as-tv-icon" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 3)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">03</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 7)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">07</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 11)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">11</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 15)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">15</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 19)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">19</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 23)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">23</h4>
            </div>
            <img src="/public/escalera.png" className="as-stair-icon" />
            <img src="/public/salida.png" className="as-stair-icon" />
            <span></span>
            <span></span>

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 4)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">04</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 8)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">08</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 12)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">12</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 16)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">16</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 20)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">20</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 24)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">24</h4>
            </div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          ""
        )}
        {piso == 2 ? (
          <div className="as-seat-display">
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 25)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">25</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 29)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">29</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 33)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">33</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 37)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">37</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 41)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">41</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 45)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">45</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 49)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">49</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 51)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">51</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 53)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">53</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 57)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">57</h4>
            </div>

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 26)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">26</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 30)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">30</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 34)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">34</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 38)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">38</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 42)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">42</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 46)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">46</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 50)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">50</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 52)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">52</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 54)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">54</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 58)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">58</h4>
            </div>

            <span></span>
            <span></span>
            <img src="/public/television.png" className="as-tv-icon" />
            <span></span>
            <span></span>
            <img src="/public/television.png" className="as-tv-icon" />
            <span></span>
            <span></span>
            <span></span>
            <img src="/public/television.png" className="as-tv-icon" />

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 27)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">27</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 31)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">31</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 35)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">35</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 39)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">39</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 43)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">43</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 47)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">47</h4>
            </div>
            <img src="/public/escalera.png" className="as-stair-icon" />
            <span></span>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 55)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">55</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 59)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">59</h4>
            </div>

            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 28)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">28</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 32)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">32</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 36)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">36</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 40)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">40</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 44)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">44</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 48)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">48</h4>
            </div>
            <span></span>
            <span></span>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 56)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">56</h4>
            </div>
            <div className="as-seat-div">
              <img
                onClick={(e) => ElegirAsiento(e, 60)}
                src="/public/seat.png"
                className="as-seat-icon"
              />
              <h4 className="as-seat-num">60</h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {asientos && asientos.length > 0 ? (
  <div className="as-elegidos">
    <div>
    Asientos Elegidos: {" "}
        {asientos.map((element, index)=>(
            <span key={index}>
                <span className="as-asientos">{element}</span>
                <span> </span>
            </span>
        ))}
    </div>
    <CustomBtn text="Aceptar" onClick={() => {
    ActualizarAsientos();
    HabilitarCambio();
}} />

  </div>
) : null}
    </>
  );
};

export default AsientoSelector;
