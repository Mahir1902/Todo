import { Todo } from '@/app/page'
import { useTodoStore } from '@/store/TodoStore';
import React from 'react'
import { MdDelete } from "react-icons/md";

type TodoItemProps = {
    todo:Todo
}

export default function TodoItem({todo}: TodoItemProps) {

    const {deleteTodo, editTodo, toggleTodo} = useTodoStore(state => state)

  return (
    <li key={todo.id} className='flex justify-between pl-3 pr-2 py-1 bg-slate-700 align-middle rounded-md '>
        <div className='flex gap-3 flex-grow'>
        <input 
        type="checkbox"
        checked={todo.completed}
        onClick={() => toggleTodo(todo.id)}
        />
        <input type="text" 
        className={`flex-1 bg-transparent text-white w-full ${todo.completed? 'line-through': ''}`}
        value={todo.title}
        onChange={(e) => editTodo(todo.id, e.target.value)}
        />
        </div>
        <button className='ml-2 text-white' onClick={() => deleteTodo(todo.id)}><MdDelete/></button>
    </li>
  )
}
