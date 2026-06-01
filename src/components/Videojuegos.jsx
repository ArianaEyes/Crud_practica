import React from 'react'
import { useState, useEffect } from 'react'
import { obtenerDatos, eliminarDatos, editarDatos } from '../services/api';
import { useNavigate } from 'react-router-dom'

const Videojuegos = () => {

  const [videojuegos, setVideojuegos] = useState([])
  const [modalAbierta, setModalAbierta] = useState(false)
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
  

  const handleEditar = (juego) => {
    setJuegoSeleccionado(juego)
    setModalAbierta(true)
  }

  useEffect(() => {
    obtenerDatos().then((datos) => setVideojuegos(datos))
  }, [])

  return (
    <>
      <table className='align-middle'>
        <thead className='p-4 get-head'>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Desarrollador</th>
            <th>Año de Creación</th>
            <th>Rating</th>
            <th>Imagen</th>
            <th>Pros</th>
            <th>Contras</th>
            <th>Horas</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.map(juego => (
            <tr key={juego.id} className='w-1/4 p-4 get'>
              <td className='fila-ancho-minism px-4'>{juego.id}</td>
              <td className='fila-ancho-sm'>{juego.nombre}</td>
              <td className='fila-ancho-sm'>{juego.desarrollador}</td>
              <td className='fila-ancho-minism'>{juego.anio}</td>
              <td className='fila-ancho-minism'>{juego.rating}</td>
              <td className='fila-ancho-m'>
                <img src={juego.imagen_url} className="w-full h-full object-cover rounded-lg" alt={juego.nombre}/>
              </td>
              <td className='fila-ancho-m'>{juego.pros}</td>
              <td className='fila-ancho-m'>{juego.contras}</td>
              <td className='fila-ancho-minism'>{juego.duracion_horas}</td>
              <td className='fila-ancho-minism'>
                <button onClick={() => handleEditar(juego)} className="button">
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </td>
              <td className='fila-ancho-minism'>
                <button className="button" onClick={() => eliminarDatos(juego.id)}>
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalAbierta && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          
          <div className="modal-actualizar h-75 overflow-x-hidden">
            <div className="bg-white rounded-lg p-6 w-96 flex flex-col gap-4 p-4">
            <h2 className="text-lg font-bold">Editar Videojuego</h2>
            <label className="text-sm font-medium">Nombre:</label>
            <input
              type="text"
              value={juegoSeleccionado?.nombre || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, nombre: e.target.value})}
              placeholder="Nombre"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Desarrollador:</label>
            <input
              type="text"
              value={juegoSeleccionado?.desarrollador || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, desarrollador: e.target.value})}
              placeholder="Desarrollador"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Año de Creación:</label>
            <input
              type="text"
              value={juegoSeleccionado?.anio || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, anio: e.target.value})}
              placeholder="Año de Creación"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Rating:</label>
            <input
              type="text"
              value={juegoSeleccionado?.rating || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, rating: e.target.value})}
              placeholder="Rating"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">URL de la Imagen:</label>
            <input
              type="text"
              value={juegoSeleccionado?.imagen_url || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, imagen_url: e.target.value})}
              placeholder="URL de la Imagen"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Pros:</label>
            <input
              type="text"
              value={juegoSeleccionado?.pros || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, pros: e.target.value})}
              placeholder="Pros"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Contras:</label>
            <input
              type="text"
              value={juegoSeleccionado?.contras || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, contras: e.target.value})}
              placeholder="Contraseñas"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Duración (horas):</label>
            <input
              type="text"
              value={juegoSeleccionado?.duracion_horas || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, duracion_horas: e.target.value})}
              placeholder="Duración (horas)"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Reseña:</label>
            <input
              type="text"
              value={juegoSeleccionado?.resena || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, resena: e.target.value})}
              placeholder="Reseña"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Plataforma:</label>
            <input
              type="text"
              value={juegoSeleccionado?.plataforma || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, plataforma: e.target.value})}
              placeholder="Plataforma"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <label className="text-sm font-medium">Género:</label>
            <input
              type="text"
              value={juegoSeleccionado?.id_genero || ''}
              onChange={(e) => setJuegoSeleccionado({...juegoSeleccionado, id_genero: e.target.value})}
              placeholder="ID del Género"
              className="border border-gray-300 rounded px-3 py-2"
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setModalAbierta(false)}
                className="px-4 py-2 border rounded"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  editarDatos(juegoSeleccionado.id, juegoSeleccionado)
                  setModalAbierta(false)
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Guardar
              </button>
            </div>
          </div>
          </div>
          
        </div>
      )}
    </>
  )
}

export default Videojuegos