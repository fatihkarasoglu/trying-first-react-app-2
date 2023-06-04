import { useDispatch } from "react-redux"
import { deleteTodo } from "../stores/todo"

export default function TodoItem({ setModal, todo, user }) {

    const dispatch = useDispatch()
    const deleteHandle = () => {
        dispatch(deleteTodo(todo.id))
    }

    const editHandle = () => {
        setModal({
            name: 'edit-todo',
            data: todo
        })
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