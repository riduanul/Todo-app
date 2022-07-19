import React, { ChangeEvent, FormEvent, useState } from 'react'
import AddTodo from './AddTodo'
import Row from './Row'
import {data} from './todoData'
import {v4 as uuidv4} from 'uuid';
type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

const Todos = () => {

    const [todos, setTodos] = useState<Todo[]> (data)
    const [task, setTask] = useState('')
    const todoLength = todos.length
    const hasTodos = todos.length > 0 
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length
    
    const handleDeleteTodo = (id:string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)

    }

    const handleCheckTodo = (id:string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted,
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    const handleAddTodo = (todo: Todo)=> {
        const updatedTodos = [...todos, todo]
        setTodos(updatedTodos)
        setTask('');
    }

    const handleChange = (e:ChangeEvent) => {
        const {value} = e.target as HTMLInputElement
        setTask(value)
    }

    const handleSubmitTodo = (e:FormEvent) => {
        e.preventDefault()

        const todo = {
            id: uuidv4(),
            task:task,
            isCompleted: false
        }
        task && handleAddTodo(todo)
    }

    return (
        <section className='w-10/12 sm:w-10/11 lg:w-1/2 max-w-2xl flex flex-col items-center'>
            
            <div className='m-5 text-center'>
                <h1 className='text-xl text-red-400 font-bold'>Simple Todo App</h1>
                <p className='text-gray-400'>with React, Typescript, Tailwindcss</p>
            </div>
            
            <AddTodo  
            task= {task}
            handleChange={handleChange}
            handleSubmitTodo={handleSubmitTodo}
           
            />

        {todos.map((todo) => (
            <Row key={todo.id} todo={todo} handleCheckTodo={handleCheckTodo} handleDeleteTodo={handleDeleteTodo}/>
        ))}

        {!hasTodos && <p className='mb-5 text-xl text-red-500 uppercase'>Please add a todo!</p>}
        {hasTodos && (
            <p>{`[${remainingTodos} of ${todoLength}] todos remaining`}</p>
        )}
        </section>
    )
}

export default Todos;