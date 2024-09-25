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

    const CreateUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nameExist = usersList.some((element)=>(element.name==nameVal))
        const mailExist = usersList.some((element)=>(element.email==emailVal))
        if (nameExist || mailExist) {
            setErrorMsg('Ya existe un usuario con esos datos')
            return
        }
        if (emailVal.length<6||emailVal=='') {
            setErrorMsg('Ingrese un email valido')
            return
        }
        if (nameVal.length<3||nameVal=='') {
            setErrorMsg('caracteres minimos del nombre: 3')
            return
        }
        if (passwordVal.length<5||passwordVal=='') {
            setErrorMsg('caracteres minimos de contraseña: 5')
            return
        }
        setErrorMsg('')
        const newUser: UserInfo = {
            id: 'U'+usersList.length,
            name: nameVal,
            email: emailVal,
            password: passwordVal
        }
        const UpdatedList = [...usersList, newUser]
        setUsersList(UpdatedList)
        localStorage.setItem('usersList',JSON.stringify(UpdatedList))
    }

    const Loguearse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const existUser = usersList.filter((element)=>(element.name!==nameLog||element.email!==nameLog))
        if(existUser){
            if ((existUser[0].name==nameLog||existUser[0].email==nameLog)&&existUser[0].password==passwordLog){
                localStorage.setItem('actualUser',JSON.stringify(existUser[0]))
                setErrorMsg('')
                console.log('logueado con exito')
            }else {
                setErrorMsg('Ingrese una contraseña correcta')
                return
            }
        }
    }

    return (
        <div className="general-container">
            {hasAcc?
            (<form className="login-container" onSubmit={Loguearse}>
                <div className="input-container">
                    <h4>Usuario</h4>
                    <input onChange={(e)=>HandleChange(e,'nombreLog')} type="text"/>
                    <h4>Contraseña</h4>
                    <input onChange={(e)=>HandleChange(e,'contraLog')} type="password"/>
                    <button>Iniciar Sesion</button>
                </div>
                <div className="center">
                    <h4 onClick={()=>{setHasAcc(false); setErrorMsg('')}}>Eres nuevo? Registrate</h4>
                    <h4 style={{color:'red'}}>{errorMsg}</h4>
                </div>
            </form>):
            (<form className="login-container" onSubmit={CreateUser}>
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
                    <h4 onClick={()=>{setHasAcc(true); setErrorMsg('')}}>Ya tienes cuenta? Iniciar Sesion</h4>
                    <h4 style={{color:'red'}}>{errorMsg}</h4>
                </div>
            </form>)
            }
        </div>
    )
}

export default Login