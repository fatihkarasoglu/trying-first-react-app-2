import { useState } from "react";
import { nanoid } from 'nanoid';
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todo";

export default function AddTodo({ user }) {

    const dispatch = useDispatch()

    const [todo, setTodo] = useState('');
    const submitHandle = e => {
        e.preventDefault()
        dispatch(addTodo({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id
        }))
        setTodo('')
    }

    return(
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Todo Ekleyin" className="border"/>
            <button disabled={!todo || !user} type="submit">Ekle</button>
        </form>
    )
}