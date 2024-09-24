import { useState } from "react"
import { UserInfo } from "../App";
import './Login.css'
import { useEffect } from "react";


const Login = () => {

    const [hasAcc,setHasAcc] = useState(false);
    const [emailVal, setEmailVal] = useState<string>('');
    const [nameVal, setNameVal] = useState<string>('');
    const [passwordVal, setPasswordVal] = useState<string>('');
    const [nameLog, setNameLog] = useState<string>('');
    const [passwordLog, setPasswordLog] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [usersList, setUsersList] = useState<UserInfo[]>([]);

    useEffect(() => {
        const savedList = localStorage.getItem('usersList');
        if (savedList) {
          const parsedList = JSON.parse(savedList);
          setUsersList(parsedList)
        }
      }, []);

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement>, tipo:string) =>{
        if (tipo=='email'){
            setEmailVal(e.target.value)
        }
        if (tipo=='nombre'){
            setNameVal(e.target.value)
        }
        if (tipo=='contra'){
            setPasswordVal(e.target.value)
        }
        if (tipo=='nombreLog'){
            setNameLog(e.target.value)
        }
        if (tipo=='contraLog'){
            setPasswordLog(e.target.value)
        }
    }

    const CreateUser = () => {
        const newUser: UserInfo = {
            id: 'U'+usersList.length,
            name: nameVal,
            email: emailVal,
            password: passwordVal
        }
        const UpdatedList = [...usersList, newUser]
        setUsersList(UpdatedList)
    }

    return (
        <div className="general-container">
            {hasAcc?
            (<div className="login-container" onSubmit={()=>{}}>
                <div className="input-container">
                    <h4>Usuario</h4>
                    <input onChange={(e)=>HandleChange(e,'nombreLog')} type="text"/>
                    <h4>Contraseña</h4>
                    <input onChange={(e)=>HandleChange(e,'contraLog')} type="password"/>
                    <button>Iniciar Sesion</button>
                </div>
                <div className="center">
                    <h4 onClick={()=>setHasAcc(false)}>Eres nuevo? Registrate</h4>
                    <h4></h4>
                </div>
            </div>):
            (<div className="login-container">
                <div className="input-container">
                    <h4>Correo</h4>
                    <input onChange={(e)=>HandleChange(e,'email')} type="email"/>
                    <h4>Usuario</h4>
                    <input onChange={(e)=>HandleChange(e,'nombre')} type="text"/>
                    <h4>Contraseña</h4>
                    <input onChange={(e)=>HandleChange(e,'contra')} type="password"/>
                    <button>Registrarse</button>
                </div>
                <div className="center">
                    <h4 onClick={()=>setHasAcc(true)}>Ya tienes cuenta? Iniciar Sesion</h4>
                    <h4></h4>
                </div>
            </div>)
            }
        </div>
    )
}

export default Login