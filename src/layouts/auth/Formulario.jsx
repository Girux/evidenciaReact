import React from 'react'

function Formulario() {
  return (
    <form action="#" method="post">
      <label>
        Nombre:
        <input type="text" name="name" required/>
      </label>
      <label>
        Apellido:
        <input type="text" name="lastName" required/>
      </label>
      <label>
        Edad:
        <input type="number" name="age" required/>
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" required/>
      </label>
      <label>
        Nota del Curso:
        <input type="number" name="grade" required/>
      </label>
      <button type="submit">Registrar</button>
    </form>
  )
}

export { Formulario }
