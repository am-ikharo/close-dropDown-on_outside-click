import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dropdown from './Dropdown'
// import InlineEdit from './InlineEdit'

function App() {
  
  return (
    <div className='min-h-screen bg-grey-50 dark:bg-gray-900 flex flex-col'>
      <header className='border-b py-4'>
        <div className=' container mx-auto px-4'>
          <h1 className='text-2xl font-bold'>
            React Projects
          </h1>
        </div>

      </header>
      <main>
        <InlineEdit />
      </main>

    </div>
  )
}

export default App
