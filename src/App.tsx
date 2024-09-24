import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import { useEffect } from 'react';

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
          <Route path="/" element={<Login />} />
          <Route path="/pages/Home" element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
