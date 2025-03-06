import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface Todo {
  id: string
  order: number
  title: string
  done: boolean
  createdAt: string
  updatedAt: string
}

export const useTodoStore = create(
  // combine(상태, 액션함수)
  combine(
    {
      todos: [] as Todo[]
    },
    (set, get) => ({
      getTodos: async () => {
        const todos: Todo[] = await requestTodos({})
        set({
          todos: todos
        })
      },
      createTodo: async (title: string) => {
        const data: Todo = await requestTodos({
          method: 'POST',
          data: {
            title
          }
        })
        const { todos } = get() // 객체 구조 할당
        set({
          todos: [data, ...todos] // 할당!
        })
      },
      updateTodo: async (todo: Todo) => {
        await requestTodos({
          method: 'PUT',
          endpoint: `/${todo.id}`,
          data: {
            title: todo.title,
            done: todo.done
          }
        })
      },
      deleteTodo: async () => {}
    })
  )
)

async function requestTodos(payload: {
  endpoint?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  data?: unknown
}) {
  const { endpoint = '', method = 'GET', data } = payload
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos${endpoint}`,
    {
      method,
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT8_bcAWVpD8',
        username: 'KDT8_ParkYoungWoong'
      },
      body: data ? JSON.stringify(data) : undefined
    }
  )
  return await res.json()
}
