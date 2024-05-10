import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Listado } from './layouts/auth/Listado.jsx'
import { Formulario } from './layouts/auth/Formulario.jsx'

const router = createBrowserRouter([
    {
        // lo que quiero que se muestre en el navegador
        path: "/", 
        element: <Formulario />
    },
    {
        //otra pagina xd
        path: "/listado",
        element: <Listado />
    }

])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
