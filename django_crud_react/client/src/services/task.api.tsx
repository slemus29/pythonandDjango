import axios from "axios";

const taskApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTask = () => taskApi.get('/')

export const getTask = (id: string) => taskApi.get(`/${id}`)


export const createTask = (task) => {
    return taskApi.post('/', task)
}

export const deleteTask = (id: string) => {
    return taskApi.delete(`/${id}`)
}

export const updateTask = (id: string, task) => {
    return taskApi.put(`/${id}/`, task)
}