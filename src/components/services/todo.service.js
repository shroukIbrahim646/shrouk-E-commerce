import { toDoAppInterceptor } from "../utils/interceptor"


export const getTodos = async () => {
  const axiosResponse = await toDoAppInterceptor.get('https://dummyjson.com/todos')
  const todos = axiosResponse.data
  return todos
}

export const getTodoById  = async (id) => {
  const axiosResponse = await toDoAppInterceptor.get(`https://dummyjson.com/todos/${id}`)
  const todo = axiosResponse.data
  return todo
}