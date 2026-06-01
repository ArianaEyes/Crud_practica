import { useState,React} from 'react'
import TitleAgregar from '../components/TitleAgregar'
import { agregarDatos } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Agregar = () => {
  const [juego, setJuego] = useState({
    nombre: '',
    resena: '',
    id_genero: '',
    desarrollador: '',
    anio: '',
    rating: '',
    imagen_url: '',
    pros: '',
    contras: '',
    duracion_horas: ''
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setJuego({ ...juego, [e.target.name]: e.target.value })
  }

  const handleGuardar = async () => {
    await agregarDatos(juego)
    console.log(juego)
    navigate('/')
  }

  return (
    <div className="w-full contenedor overflow-y-hidden flex flex-col items-center justify-start pt-5">
      <TitleAgregar titulo="Agregar videojuego"/>
      <div className="flex flex-col gap-4 w-96 ">
      <h2 className="text-xl text-center font-bold">Agregar Videojuego</h2>
      <div className="modal-agregar h-75 ">
            <div className="bg-white rounded-lg  w-96 flex flex-col gap-4 p-4">

            <input name="nombre" placeholder="Nombre" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="resena" placeholder="Reseña" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="desarrollador" placeholder="Desarrollador" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="anio" placeholder="Año" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="rating" placeholder="Rating" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="imagen_url" placeholder="URL Imagen" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="pros" placeholder="Pros" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="contras" placeholder="Contras" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="duracion_horas" placeholder="Duración (horas)" onChange={handleChange} className="border rounded px-3 py-2" />
      <input name="id_genero" placeholder="ID Género" onChange={handleChange} className="border rounded px-3 py-2" />

      <div className="flex gap-2 justify-end">
        <button onClick={() => navigate('/')} className="px-4 py-2 border rounded">
          Cancelar
        </button>
        <button onClick={
          //() => navigate('/'),
           handleGuardar} className="px-4 py-2 bg-blue-500 text-white rounded">
          Guardar
        </button>
      </div>
            </div>
            </div>

      
    </div>
    </div>
  )
}

export default Agregar
