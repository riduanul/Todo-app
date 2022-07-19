import React from 'react'

type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo,
    handleDeleteTodo: (id:string) => void
    handleCheckTodo: (id:string) => void
}

const Row = ({
    todo: {task, isCompleted, id},
    handleDeleteTodo,
    handleCheckTodo
    } : TodoProps) => {

  return (
    <div className={`flex p-2 rounded w-full mb-2 justify-between items-center ${isCompleted ? "bg-gray-400" : "bg-green-300"}`}>
        <p className=' text-gray-600 '>{task}</p>
        <div className='w-1/6 flex justify-between items-center mr-2'>
            <button
            aria-label="Delete a todo"
            onClick={() => handleDeleteTodo(id)}
            className='h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded'
            >
                X
                </button>
            <input 
            type="checkbox" 
            checked={isCompleted}
            onChange={() => handleCheckTodo(id)}
            className='form-checkbox h-7 w-7'
            />
        </div>
     </div>
  )
}

export default Row



