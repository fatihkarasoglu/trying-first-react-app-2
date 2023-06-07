import { useSelector } from "react-redux"

import TodoItem from "./item"

export default function TodoList({ setModal }) {

    const { todos } = useSelector(state => state.todo)

    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} setModal={setModal} todo={todo} />)}
        </ul>
    )
}