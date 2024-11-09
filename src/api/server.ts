import { Todo } from "@/types/Todo"
import { api } from "@/utils/api"

export const createTask = async (title: string) => {
    const response = await api.post("/task", { title })
    return response.data.result as Todo
}

export const getTasks = async () => {
    const response = await api.get("/tasks")
    return response.data.result as Todo[]
}

export type UpdateTaskProps = { id: number, done: boolean }
export const updateTask = async (data: UpdateTaskProps) => {
    const response = await api.put(`/task`, data)
    return response.data.result as Todo
}

export const deleteTask = async (taskId: number) => {
    const response = await api.delete(`/task`, { data: { id: taskId } })
    return response.data.result
}