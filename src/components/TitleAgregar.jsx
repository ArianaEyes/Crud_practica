import React from 'react'
import { agregarDatos } from '../services/api'

const TitleAgregar = ({titulo}) => {
  return (
    <div className='title-agregar w-full h-16 flex items-center justify-center mb-5'>
      <p className="text-white">{titulo}</p>
    </div>
  )
}

export default TitleAgregar
