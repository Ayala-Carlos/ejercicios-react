import ProfileCard from './components/ProfileCard';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container py-5">
      <h1 className="text-center mb-5">Ejercicio 2: Uso de Props</h1>
      
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {/* Enviando información mediante props */}
        <ProfileCard 
          nombre="Juan Pérez" 
          edad={25} 
          profesion="Desarrollador Web" 
          ciudad="San Salvador" 
        />

        <ProfileCard 
          nombre="María López" 
          edad={30} 
          profesion="Diseñadora UX" 
          ciudad="Madrid" 
        />

        <ProfileCard 
          nombre="Carlos Ruiz" 
          edad={22} 
          profesion="Ingeniero de Software" 
          ciudad="Ciudad de México" 
        />
      </div>
    </div>
    </>
  )
}

export default App
