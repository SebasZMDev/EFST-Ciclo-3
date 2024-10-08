import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import { useEffect } from 'react';
import SelectBus from './pages/SelectBus';

export type UserInfo = {
  id: string,
  name: string,
  email: string,
  password: string
}

function App() {

  useEffect(()=>{
    const existList = localStorage.getItem('usersList')
    if (existList){
      const usersList: UserInfo[] = [];
      localStorage.setItem('usersList', JSON.stringify(usersList))
    }else{
      return
    }
  })

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeOrLogin />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/SelectBus" element={<SelectBus />} />
        </Routes>
      </Router>
  )
}

function HomeOrLogin() {
  const isUserLogged = localStorage.getItem('actualUser');
  return isUserLogged ? <Home />: <Login />;
}

export default App
