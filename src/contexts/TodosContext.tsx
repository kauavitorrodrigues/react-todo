import { Todo } from "@/types/Todo"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import * as api from "@/api/server"

type TodoContextType = {
    todos: Todo[]
    loading: boolean
    fetchTodos: () => void
}

const TodosContext = createContext<TodoContextType | undefined>(undefined)

type Props = { children: ReactNode }

export const TodosProvider = ({children} : Props ) => {

    const [ todos, setTodos ] = useState<Todo[]>([])
    const [ loading, setLoading ] = useState(false)

	const fetchTodos = async () => {
        setLoading(true)
        const list = await api.getTasks()
        setTodos(list)
        setLoading(false)
	}
	
	useEffect(() => {
		fetchTodos()
	}, [])

    return (

        <TodosContext.Provider value={{ todos, loading, fetchTodos }}>
            {children}
        </TodosContext.Provider>
    
    )

}

export const useTodos = () : TodoContextType  => {

    const context = useContext(TodosContext)

    if (!context) {
        throw new Error('useTodos deve ser usado com um TodosProvider')
    }

    return context

}