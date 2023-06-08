import { useState } from "react";
import { useSelector } from "react-redux";

import './index.css';
import Header from "./todo/header";
import AddTodo from "./todo/add";
import TodoList from "./todo/list";
import Modal from "./todo/modal";
import { openModal, closeModal } from "./stores/modal";

function App() {

  const { open: isModalOpen } = useSelector(state => state.modal)

  const [language, setLanguage] = useState('TR');
  const [dark, setDark] = useState(true);

  return(
    <main>
      {isModalOpen && <Modal />}
      <Header />
      <AddTodo />
      <TodoList/>
    </main>
  )
}

export default App;