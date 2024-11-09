"use client"

import { Todo } from "@/types/Todo"
import { Checkbox } from "../ui/checkbox"
import { Card } from "../ui/card"
import * as api from "@/api/server"
import { useState } from "react"
import { Trash } from "lucide-react"
import { useTodos } from "@/contexts/TodosContext"

type Props = {
    todo: Todo
}

export const TodoItem = ({ todo } : Props ) => {

    const { fetchTodos } = useTodos()
    const [done, setDone] = useState(todo.done)

    const handleUpdateTodo = async (id: number, done: boolean) => {
        await api.updateTask({ id, done})
        setDone(done)
        fetchTodos()
    }

    const handleDeleteTodo = async (id: number) => {
        await api.deleteTask(id)
        fetchTodos()
    }

    return (

        <Card className="p-6 w-full">

            <div className="flex justify-between space-x-2">

                <div className="flex items-center space-x-2">

                    <Checkbox  
                        checked={done}
                        onCheckedChange={
                            () => handleUpdateTodo(todo.id, !todo.done)
                        }
                    />

                    <p className={`${ done && "line-through opacity-90" }`}>
                        { todo.title }
                    </p>

                </div>

                <Trash size={20}  className="cursor-pointer hover:text-red-600" 
                    onClick={() => handleDeleteTodo(todo.id)}
                />

            </div>

        </Card>
    )

}