import { Todo } from "@/types/Todo"
import { Checkbox } from "../ui/checkbox"
import { useState } from "react"
import { Card } from "../ui/card"

type Props = {
    todo: Todo
}

export const TodoItem = ({ todo } : Props ) => {

    const [ complete, setComplete ] = useState(todo.completed)

    return (

        <Card className="p-6 w-full">

            <div className="flex items-center space-x-2">

                <Checkbox  
                    checked={complete}
                    onCheckedChange={() => setComplete(!complete)}
                />

                <p className={`${ complete && "line-through opacity-90" }`}>
                    { todo.label }
                </p>

            </div>

        </Card>
    )

}