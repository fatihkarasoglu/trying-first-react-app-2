import { useState } from "react";

import Header from "./todo/header";
import AddTodo from "./todo/add";
import TodoList from "./todo/list";
import Modal from "./todo/modal";

function App() {

  const [language, setLanguage] = useState('TR');
  const [dark, setDark] = useState(true);
  const [modal, setModal] = useState(false)

  const close = () => setModal(false)

  return(
    <main>
      {modal && <Modal close={close} name={modal.name} data={modal.data} />}
      <Header />
      <AddTodo />
      <TodoList setModal={setModal} />
    </main>
  )
}

export default App;