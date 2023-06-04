import TodoItem from "./item"

export default function TodoList({ todos, setTodos, user }) {

    return(
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} setTodos={setTodos} user={user} todo={todo} />)}
        </ul>
    )
}