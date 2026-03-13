import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const estudiantes = [
    { id: 1, nombre: "Ana García", edad: 21, carrera: "Ingeniería", ciudad: "San Salvador" },
    { id: 2, nombre: "Kevin Torres", edad: 23, carrera: "Diseño", ciudad: "Santa Ana" },
    { id: 3, nombre: "Lucía Rivas", edad: 20, carrera: "Comunicaciones", ciudad: "San Miguel" },
    { id: 4, nombre: "Roberto Gómez", edad: 22, carrera: "Arquitectura", ciudad: "Sonsonate" }
  ];

  return (
    <>
      <div className="container py-5">
      <h2 className="text-center mb-5 text-primary">Lista de Estudiantes (Uso de map)</h2>
      
      {/* 1. Necesitamos un div con la clase row para envolver las columnas */}
      <div className="row">
        
        {/* 2. Aquí aplicamos el .map() para recorrer el arreglo */}
        {estudiantes.map((estudiante) => (
          <div className="col-md-4 mb-4" key={estudiante.id}> 
            {/* Importante: el "key" va en el primer elemento del map */}
            
            <div className="card shadow-sm h-100">
              <div className="card-body text-center">
                <div className="bg-primary text-white rounded-circle d-inline-block p-3 mb-3" style={{width: '60px'}}>
                  {/* 3. Usamos "estudiante" que es nuestra variable del map */}
                  {estudiante.nombre.charAt(0)}
                </div>
                <h5 className="card-title">{estudiante.nombre}</h5>
                <p className="card-text text-muted">
                  {estudiante.carrera} <br />
                  <small>{estudiante.edad} años - {estudiante.ciudad}</small>
                </p>
                <button className="btn btn-sm btn-outline-primary">Ver Expediente</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
    </>
  )
}

export default App
