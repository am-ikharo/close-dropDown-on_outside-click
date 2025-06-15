import React, { useState } from 'react';
import { Pencil } from 'lucide-react';




const InlineEdit = () => {

  const [items, setItems] = useState([
    {
      id: 1, text : 'Hello',
    },
    {
      id : 2, text : 'Abdul'
    }
  ])

  const [currentEditedID, setCurrentEditedID] = useState(null)
  const [currentEditedValue, setCurrentEditedValue] = useState(null)
  const inputRef = useref(null)

  const handleEdit = (id, text) => {
    setCurrentEditedID(id)
    setCurrentEditedValue(text)
  }


  return (
    <>
      <div className='flex flex-col pt-[150] justify-center item-center bg-gray-50'>
        <h1>Inline Editable Input</h1>
        <div className='mt-10 flex flex-col gap-4'>
           {
          items.map(item => (
            <div onClick={()=> handleEdit(item.id, item.text) } className='flex bg-gray-700 p-4 justify-between items-center cursor-pointer group'>
              <span className='text-white'>{item.text}</span>
              <Pencil className='h-4 w-4 text-white opacity-0 group-hover:opacity-100 transition-opacity'/>
              
            </div>
          ))
        }
        </div>
      </div>

    </>
  )
}

export default InlineEdit