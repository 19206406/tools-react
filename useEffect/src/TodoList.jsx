
import React, { useMemo } from 'react'
import { filterTodos } from './helpers/utils'

export const TodoList = ({ todos, theme, tab }) => {
    const visibleTodos = useMemo(
        () => filterTodos(todos, tab), 
        [todos, tab]
    )
  return (
    <div className={theme}>
        <p><b>Nota: ¡<code>filterTodos</code> se ralentiza artificialmente!</b></p>
        <ul>
            {
                visibleTodos.map(todo => {
                    <li key={todo.id}>
                        {todo.completed ? 
                        <s>{todo.text}</s> :
                        todo.text
                        }
                    </li>
                })
            }
        </ul>

    </div>
  )
}


