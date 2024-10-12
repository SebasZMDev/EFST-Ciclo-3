import { useState } from 'react'
import './ComStyles.css'


const AsientosBus = () => {


    const [piso, setPiso] = useState(2);
    const ElegirAsiento =  (e: React.MouseEvent<HTMLImageElement>) => {
        e.currentTarget.src="/public/seatgreen.png";
    }
    const AsientoOcupado =  (e: React.MouseEvent<HTMLImageElement>) => {
        e.currentTarget.src="/public/seatred.png";
    }

    return (

            <div className='ab-div'>
                <h2 className='ab-seat-tittle'>Seleccione de Asientos</h2>
                <div className='ab-seat-subtittles'>
                    <h2 onClick={()=>setPiso(1)} className={piso==1?'ab-piso-seleccionado':''}>Piso 1:</h2>
                    <h2 onClick={()=>setPiso(2)} className={piso==2?'ab-piso-seleccionado':''}>Piso 2:</h2>
                </div>


                {piso==1?
                (<div className='ab-seat-display'>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img src="/public/bath.png" className="ab-stair-icon"/>
                    <span></span>
                    <span></span>
                    <img src='/public/volante.png' className='ab-stair-icon' style={{transform:'rotate(90deg)'}}/>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <span></span>
                    <span></span>
                    <img src='/public/television.png' className='ab-tv-icon'/>
                    <span></span>
                    <span></span>
                    <img src='/public/television.png' className='ab-tv-icon'/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img src="/public/escalera.png" className="ab-stair-icon"/>
                    <img src="/public/salida.png" className="ab-stair-icon"/>
                    <span></span>
                    <span></span>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>):''}
                {piso==2?
                (<div className='ab-seat-display'>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>

                    <span></span>
                    <span></span>
                    <img src='/public/television.png' className='ab-tv-icon'/>
                    <span></span>
                    <span></span>
                    <img src='/public/television.png' className='ab-tv-icon'/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <img src='/public/television.png' className='ab-tv-icon'/>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img src="/public/escalera.png" className="ab-stair-icon"/>
                    <span></span>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>

                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <span></span>
                    <span></span>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                    <img onAuxClick={(e)=>AsientoOcupado(e)} onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                </div>):''}
            </div>
    )
}

export default AsientosBus