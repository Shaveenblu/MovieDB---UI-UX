import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './components/Practice'
import Search from './Componenets/Search'

function App() {
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('BATMAN')


  return (
    <main>
      <div className='pattern'></div>
        <div className='wrapper'>

          <header>
            <img src='./assets/hero.png' alt='hero-banner'/>
            <h1>
              Find <span className='text-gradient'>Movies</span> You will enjoy.
            </h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={searchTerm}/>
        </div>
    </main>
  )
}

export default App
