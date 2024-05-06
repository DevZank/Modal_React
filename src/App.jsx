import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isModal, setModal] = useState(false);

  function toggleModal() {
    setModal(!isModal);
  }
  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Click me
      </button>
      {isModal && <Modal setToggleModal={toggleModal} />}
    </div>
  );
}

export default App;
