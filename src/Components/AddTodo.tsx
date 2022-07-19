import React, { ChangeEvent, FormEvent } from 'react'


type AddTodoProps ={
    task: string,
    handleChange : (e:ChangeEvent) => void
    handleSubmitTodo: (e: FormEvent) => void

}
const AddTodo = ({task, handleChange, handleSubmitTodo} : AddTodoProps) => {
  
  return (
   <form className='flex justify-between w-full' onSubmit={handleSubmitTodo}>
    <input 
    type="text"
    name="task"
    value={task} 
    onChange={handleChange} 
    className='flex-1 rounded shadow p-2 text-gray-dark mr-2 mb-3 outline-none '
    />
    <button 
    type='submit' 
    aria-label='Add todo'
    className=' flex justify-center items-center text-center w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded font-bold text-white p-2 '
    >
        +
    </button>
   </form>
  )
}

export default AddTodo