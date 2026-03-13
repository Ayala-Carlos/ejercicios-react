import * as Comp from './components/MyComponents';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container py-5 bg-light min-vh-100">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark">Galería de 20 Componentes</h1>
        <p className="lead text-secondary">React JS + Bootstrap Framework</p>
      </header>

      <div className="row g-4">
        {/* Renderizado de los 20 componentes en columnas */}
        <div className="col-md-4"><h6>1. Botón Primario</h6><Comp.BotonPrimario /></div>
        <div className="col-md-4"><h6>2. Botón Peligro</h6><Comp.BotonPeligro /></div>
        <div className="col-md-4"><h6>3. Input Texto</h6><Comp.InputTexto /></div>
        <div className="col-md-4"><h6>4. Input Password</h6><Comp.InputPassword /></div>
        <div className="col-md-4"><h6>5. Select</h6><Comp.SelectPais /></div>
        <div className="col-md-4"><h6>6. Checkbox</h6><Comp.CheckboxTerminos /></div>
        <div className="col-md-4"><h6>7. Radio Buttons</h6><Comp.RadioGenero /></div>
        <div className="col-md-4"><h6>8. Alerta Éxito</h6><Comp.AlertaExito /></div>
        <div className="col-md-4"><h6>9. Alerta Aviso</h6><Comp.AlertaAviso /></div>
        <div className="col-md-4"><h6>10. Card Producto</h6><Comp.CardProducto /></div>
        <div className="col-md-4"><h6>11. Badge</h6><Comp.BadgeMensajes /></div>
        <div className="col-md-4"><h6>12. Progreso Simple</h6><Comp.ProgressAzul /></div>
        <div className="col-md-4"><h6>13. Progreso Animado</h6><Comp.ProgressAnimada /></div>
        <div className="col-md-4"><h6>14. Spinner</h6><Comp.SpinnerCargando /></div>
        <div className="col-md-4"><h6>15. Lista</h6><Comp.ListaTareas /></div>
        <div className="col-md-4"><h6>16. Breadcrumb</h6><Comp.MigasPan /></div>
        <div className="col-md-4"><h6>17. Botón Estado</h6><Comp.BotonCargando /></div>
        <div className="col-md-4"><h6>18. Card Imagen</h6><Comp.CardImagen /></div>
        <div className="col-md-4"><h6>19. Paginación</h6><Comp.PaginacionSimple /></div>
        <div className="col-md-4"><h6>20. Ayuda</h6><Comp.TextoAyuda /></div>
      </div>

      <footer className="text-center mt-5 pt-4 border-top">
        <p>© 2024 - Mi repositorio de Ejercicios React</p>
      </footer>
    </div>
    </>
  )
}

export default App
