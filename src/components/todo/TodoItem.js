import { useState } from "react";
import Modal from "../Modal";
import Backdrop from "../Backdrop";
import classes from "./TodoItem.module.css";
import Card from "../ui/Card";

function TodoItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState();

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button className={classes.btn}>Favorite</button>
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </Card>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </li>
  );
}

export default TodoItem;
