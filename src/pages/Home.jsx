import React from 'react'
import Videojuegos from '../components/Videojuegos'
import Title from '../components/Title'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full h-full contenedor flex flex-col items-center justify-start py-5">
      <div className="w-full h-10 flex items-center justify-center py-5">
        <Title titulo="CRUD Videojuegos"/>
        <button onClick={() =>{ navigate('/agregar')}} className="button-agregar">
        +
      </button>
      </div>
      
      
      <div className="table-container">
        <Videojuegos />
      </div>
    </div>
  )
}

export default Home 
