import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice from './components/Practice'

function App() {
  const [count, setCount] = useState(0)


  return (
    <main>
      <div className='pattern'></div>
        <div className='wrapper'>

          <header>
            <h1>
              Find <span className='text-gradient'>Movies</span> You will enjoy.
            </h1>
          </header>

        </div>

    </main>
  )
}

export default App
