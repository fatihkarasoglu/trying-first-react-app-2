import { useState } from "react";

import Header from "./todo/header";
import AddTodo from "./todo/add";
import TodoList from "./todo/list";

function App() {

  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState('TR');
  const [dark, setDark] = useState(true);

  return(
    <main>
      <Header user={user} setUser={setUser} />
      <AddTodo setTodos={setTodos} user={user} />
      <TodoList todos={todos} setTodos={setTodos} user={user} />
    </main>
  )
}

export default App;