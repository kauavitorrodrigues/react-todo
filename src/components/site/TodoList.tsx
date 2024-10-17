"use client"

import { useState } from "react"
import { TodoItem } from "./TodoItem"
import { Todo } from "@/types/Todo"
import { Input } from "@/components/ui/input";

export const TodoList = () => {

    const [ todoList, setTodoList ] = useState<Todo[]>([   
        { label: "Gravar vídeo", completed: true },
        { label: "Treinar", completed: false }
    ])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleAddTodo(inputValue)
    }

    const [ inputValue, setInputValue ] = useState("")

    const handleAddTodo = (label: string) => {
        if (!label.trim()) return
        const newTodo: Todo = { label, completed: false }
        const newTodoList = [ ...todoList, newTodo ]
        setTodoList(newTodoList)
        setInputValue('')
    }

    return (

        <div className="w-full max-w-2xl flex flex-col items-center gap-4">

            <h1 className="scroll-m-20 text-4xl my-4 font-bold tracking-tight lg:text-5xl">
        		Lista de Tarefas
      		</h1>

            <Input
                placeholder="Adicione uma tarefa"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            { todoList.map( (todo, index) => (
                <TodoItem todo={todo} key={index}/>
            ))}

        </div>

    )

}