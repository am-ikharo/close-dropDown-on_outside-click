import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';



const Dropdown = () => {

    const [isOpen, setIsopen] = useState(false)
    const dropdownRef = useRef(null)

    const toggledropdown = () => setIsopen(!isOpen)

    useEffect(() => {
        if(!isOpen) return;

        const handleClickoutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsopen(false)
            }
        }
        document.addEventListener('mousedown', handleClickoutside)

        return () => {
            document.removeEventListener('mousedown', handleClickoutside)
        }
    },[isOpen]);
  return (
    <div>
        <h1>Close Dropdown on Outside Click</h1>
        <div className='relative mt-6' ref={dropdownRef}>
            <button 
            onClick={toggledropdown}
            variant={'outline'}
            className='flex flex-row w-full justify-between'
            >
            select an option 
            <ArrowDown className={`ml-2 w-4 h-4 ${isOpen ? 'rotate-180' : ''}`}/>
            </button>
            {
                isOpen && (
                    <div className='absolute mt-2 w-full rounded-md border bg-background z-10 shadow-lg'>
                        <div className='py-1'>
                            {
                                ['option 1', 'option 2', 'option 3'].map((Option, index) => (
                                    <button key={index} className='block w-full px-4 py-2 text-left text-sm hover:bg-muted'>{Option}</button>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Dropdown