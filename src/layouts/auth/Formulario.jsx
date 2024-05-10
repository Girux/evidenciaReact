import './Formulario.css'
import React, { useRef, useState } from 'react'
import { info } from '../../database/Informacion'

function Formulario() {
  const resetForm = useRef()
  const [getNombre, setNombre] = useState("")
  const [getApellido, setApellido] = useState("")
  const [getEdad, setEdad] = useState("")
  const [getCorreo, setCorreo] = useState("")
  const [getNota, setNota] = useState("")

  //const [reEstudiantes, setEstudiantes] = useState([])

function registrarEstudiantes(e) {
  e.preventDefault();
  if (getNombre !== "" &&
      getApellido !== "" &&
      getEdad !== "" &&
      getCorreo !== "" &&
      getNota !== ""
  ){ const datos = {
      nombre: getNombre,
      apellido: getApellido,
      edad: getEdad,
      correo: getCorreo,
      nota: getNota
    };
    
    info.push([datos])
    console.log(datos)
    resetForm.current.reset()
  }
}

  return (
    <form ref={resetForm} onSubmit={(e)=>e.preventDefault()} action="#" method="post">
      <label>
        Nombre:
        <input onChange={(e)=>{
          setNombre(e.target.value)
        }} type="text" name="name" placeholder='Nombre'required/>
      </label>

      <label>
        Apellido:
        <input onChange={(e)=>{
          setApellido(e.target.value)
        }}type="text" name="lastName" placeholder='Apellido' required/>
      </label>

      <label>
        Edad:
        <input onChange={(e)=>{
          setEdad(e.target.value)
        }} type="number" name="age" placeholder='Edad' required/>
      </label>

      <label>
        Correo Electrónico:
        <input onChange={(e)=>{
          setCorreo(e.target.value)
        }} type="email" name="email" placeholder='Correo' required/>
      </label>

      <label>
        Nota del Curso:
        <input onChange={(e)=>{
          setNota(e.target.value)
        }} type="number" name="grade" placeholder='Nota' required/>
      </label>

      <button onClick = {registrarEstudiantes} type="submit">Registrar</button>
    </form>
  )
}

export { Formulario }
