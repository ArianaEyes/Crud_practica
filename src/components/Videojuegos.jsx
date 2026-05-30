import React from 'react'
import { useState, useEffect } from 'react'
import { obtenerDatos, agregarDatos, eliminarDatos, editarDatos } from '../services/api';
const Videojuegos = () => {

    const [videojuegos, setVideojuegos] = useState([])

    useEffect(() => {
        obtenerDatos().then((datos) => setVideojuegos(datos))
    },[])
  return (
    <div>
      <div>
        {videojuegos.map(juego => (
          <div key={juego.id}>
            <p>{juego.nombre}</p>
          </div>  
        ))
        }
      </div>
    </div>
  )
}

export default Videojuegos
