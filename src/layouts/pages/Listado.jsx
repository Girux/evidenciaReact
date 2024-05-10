import React from 'react'
import './Listado.css'
import { info } from '../../database/Informacion'

const Listado = () => {
  return (
    <div>
      {info.map((info) => (
        <section>
          <h4>Nombre: {info.nombre}</h4>
          <h4>Apellido: {info.apellido}</h4>
          <h4>Edad: {info.edad}</h4>
          <h4>Correo: {info.correo}</h4>
          <h4>Nota: {info.nota}</h4>
        </section>
      ))}
    </div>
  )
}

export { Listado }
