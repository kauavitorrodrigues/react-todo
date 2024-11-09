"use client"

import { useEffect, useState } from "react"
import { TodoItem } from "./TodoItem"
import { Input } from "@/components/ui/input";
import * as api from "@/api/server"
import { useTodos } from "@/contexts/TodosContext";

export const TodoList = () => {

    const { todos, fetchTodos } = useTodos()
    const [ inputValue, setInputValue ] = useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleAddTodo(inputValue)
    }

    const handleAddTodo = async (title: string) => {
        if (!title.trim()) return
        await api.createTask(title)
        setInputValue('')
        fetchTodos()
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

            { todos.map( (todo, index) => (
                <TodoItem todo={todo} key={index}/>
            ))}

        </div>

    )

}