export default function TodoItem({ setTodos, todo, user }) {

    const deleteHandle = () => {
        setTodos(todos => todos.filter(t => t.id !== todo.id))
    }

    const editHandle = () => {

    }

    return(
        <li>
            <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                {todo.title} - {todo.user}
            </span>
            {todo.user === user.id && (
                <>
                    <button onClick={editHandle}>Düzenle</button>
                    <button onClick={deleteHandle}>Sil</button>
                </>
            )}
        </li>
    )
}