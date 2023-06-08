import store from "./stores";
import { addTodo } from "./stores/todo";
import { setUser } from "./stores/auth"
import { openModal } from "./stores/modal";

export const addTodoHandle = todo => {
    store.dispatch(addTodo(todo))
}

export const loginHandle = user => {
    store.dispatch(setUser(user))
}

export const logoutHandle = () => {
    store.dispatch(setUser())
}

export const modal = ( name, data = false ) => {
    store.dispatch(openModal({
        name,
        data
    }))
}