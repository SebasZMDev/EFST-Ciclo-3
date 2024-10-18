import { useState } from 'react'
import './ComStyles.css'


const AsientosBus = () => {


    const [piso, setPiso] = useState(2);
    const ElegirAsiento =  (e: React.MouseEvent<HTMLImageElement>) => {
        e.currentTarget.src="/public/seatgreen.png";
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
                    <div className='ab-seat-div'>
                        <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                        <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <img src="/public/bath.png" className="ab-stair-icon"/>
                    <span></span>
                    <span></span>
                    <img src='/public/volante.png' className='ab-stair-icon' style={{transform:'rotate(90deg)'}}/>

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
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

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <img src="/public/escalera.png" className="ab-stair-icon"/>
                    <img src="/public/salida.png" className="ab-stair-icon"/>
                    <span></span>
                    <span></span>

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>):''}
                {piso==2?
                (<div className='ab-seat-display'>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>

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

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <img src="/public/escalera.png" className="ab-stair-icon"/>
                    <span></span>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>

                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <span></span>
                    <span></span>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                    <div className='ab-seat-div'>
                    <img onClick={(e)=>ElegirAsiento(e)} src="/public/seat.png" className="ab-seat-icon"/>
                        <h4 className='ab-seat-num'>1</h4>
                    </div>
                </div>):''}
            </div>
    )
}

export default AsientosBus