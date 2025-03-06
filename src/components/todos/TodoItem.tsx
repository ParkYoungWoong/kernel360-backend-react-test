import { useState } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEdit, setIsEdit] = useState(false)
  const [inputTitle, setInputTitle] = useState(todo.title)
  const updateTodo = useTodoStore(state => state.updateTodo)

  function handleSave() {
    updateTodo({
      ...todo,
      title: inputTitle
    })
  }
  function handleDelete() {
    //...
  }
  function handleCancel() {
    setIsEdit(false)
    setInputTitle(todo.title)
  }
  function handleEditMode() {
    setIsEdit(true)
  }

  return (
    <div key={todo.id}>
      {isEdit ? (
        <>
          <input
            value={inputTitle}
            onChange={e => {
              setInputTitle(e.currentTarget.value)
            }}
          />
          <button onClick={handleCancel}>취소</button>
          <button onClick={handleSave}>저장</button>
        </>
      ) : (
        <div>
          <div>{todo.title}</div>
          <button onClick={handleEditMode}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  )
}
