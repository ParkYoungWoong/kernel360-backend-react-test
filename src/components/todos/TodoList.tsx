import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TodoItem from '@/components/todos/TodoItem'

export default function TodoList() {
  const getTodos = useTodoStore(state => state.getTodos)
  const todos = useTodoStore(state => state.todos)

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <div>
      {todos.map(todo => {
        // return <div key={todo.id}>{todo.title}</div>
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        )
      })}
    </div>
  )
}
