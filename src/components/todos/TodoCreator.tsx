import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const [title, setTitle] = useState('Hello..')
  const createTodo = useTodoStore(state => state.createTodo)

  function handleCreate() {
    createTodo(title)
  }

  return (
    <>
      <h1>{title}</h1>
      <input
        value={title}
        className="rounded-md"
        onChange={e => {
          setTitle(e.currentTarget.value)
        }}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            handleCreate()
          }
        }}
      />
      <button onClick={handleCreate}>추가!</button>
    </>
  )
}
