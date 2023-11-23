'use client'

import { useTodoStore } from '@/store/TodoStore'
import {useState} from 'react'

export default function TodoAddForm() {

 const [value, setValue] = useState('')
 const {addTodo, todos} = useTodoStore(state => state)

 const handleOnSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    addTodo({
        id: todos.length + 1,
        title:value,
        completed:false
    })
    setValue('')
 }


  return (
    <form onSubmit={handleOnSubmit}>
        <div className='flex gap-3 justify-center mt-5'>
            <input 
            type="text" 
            value={value} 
            onChange={e => setValue(e.target.value)} 
            className='rounded-md text-black pl-2 py-1'
            />
            <button type='submit' className='bg-blue-600 rounded-md p-2 text-white text-semibold text-xl'>Add Todo</button>
        </div>
    </form>
  )
}
