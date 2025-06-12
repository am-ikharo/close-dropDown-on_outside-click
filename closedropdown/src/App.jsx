import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './Dropdown'

function App() {
  
  return (
    <div className='min-h-screen bg-grey-50 dark:bg-gray-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className=' container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>
            React Project
          </h1>
        </div>

      </header>
      <main>
        <Dropdown/>
      </main>

    </div>
  )
}

export default App
