import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg" style={{ width: '400px' }}>
        <div className="card-header bg-dark text-white text-center py-3">
          <h4 className="mb-0">Interfaz de Cálculo</h4>
        </div>
        
        <div className="card-body p-4">
          {/* Input 1 */}
          <div className="mb-3">
            <label className="form-label fw-bold">Primer Valor:</label>
            <input 
              type="number" 
              className="form-control form-control-lg" 
              placeholder="Ej: 10" 
            />
          </div>

          {/* Input 2 */}
          <div className="mb-3">
            <label className="form-label fw-bold">Segundo Valor:</label>
            <input 
              type="number" 
              className="form-control form-control-lg" 
              placeholder="Ej: 5" 
            />
          </div>

          {/* Botón */}
          <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary btn-lg">
              Calcular Resultado
            </button>
          </div>

          {/* Espacio para el resultado (Placeholder) */}
          <div className="mt-4 p-3 bg-secondary bg-opacity-10 border rounded text-center">
            <span className="text-muted">El resultado aparecerá aquí</span>
            <h2 className="text-primary mt-2">--</h2>
          </div>
        </div>

        <div className="card-footer text-center text-muted small">
          Ejercicio 3 - Diseño de Interfaz
        </div>
      </div>
    </div>
    </>
  )
}

export default App
