import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomBtn from "./CustomBtn";
import './ComStyles.css';

const PaginaPago = () => {
    const navigate = useNavigate();
    const [pagoRealizado, setPagoRealizado] = useState(false); // Estado para manejar si se ha realizado el pago

    const handlePrint = () => {
        window.print();
    };

    const handlePagar = () => {
        // Lógica para procesar el pago
        setPagoRealizado(true); // Cambia el estado para indicar que el pago ha sido realizado
    };

    return (
        <div className="pp-container">
            <h2 className="pp-title">Detalles de Pago</h2>
            {!pagoRealizado && (
                <div className="pp-form-container">
                <form>
                    <div className="pp-input-group">
                        <label className="pp-label">Nombre en la Tarjeta:</label>
                        <input type="text" className="pp-input" required />
                    </div>
                    <div className="pp-input-group">
                        <label className="pp-label">Número de Tarjeta:</label>
                        <input type="text" className="pp-input" required />
                    </div>
                    <div className="pp-input-group">
                        <label className="pp-label">Fecha de Vencimiento:</label>
                        <input type="month" className="pp-input" required />
                    </div>
                    <div className="pp-input-group">
                        <label className="pp-label">Código de Seguridad:</label>
                        <input type="text" className="pp-input" required />
                    </div>
                    <div className="pp-button-group">
                        <CustomBtn text={pagoRealizado ? "Comprobante de Pago" : "Pagar"} onClick={handlePagar} />
                    </div>
                </form>
            </div>
            )}
            {pagoRealizado && (
                <div style={{display:'grid', justifyContent:'center'}}>
                <div className="pp-comprobante">
                    <h3>Comprobante de Pago</h3>
                    <div className="pp-comprobante-details">
                        <p><strong>Nombre en la Tarjeta:</strong> [Nombre del usuario]</p>
                        <p><strong>Número de Tarjeta:</strong> **** **** **** [Últimos 4 dígitos]</p>
                        <p><strong>Fecha de Vencimiento:</strong> [MM/AAAA]</p>
                        <p><strong>Código de Seguridad:</strong> ***</p>
                        <p><strong>Monto:</strong> S/ [Monto]</p>
                        <p><strong>Fecha de Transacción:</strong> [Fecha actual]</p>
                    </div>
                    <CustomBtn text="Imprimir Comprobante" onClick={handlePrint} />
                    <CustomBtn text="Volver a Inicio" onClick={() => navigate('/pages/Home')} />
                </div>
                </div>
            )}
        </div>
    );
};

export default PaginaPago;
