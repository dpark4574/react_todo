import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewTodoForm.module.css";

function NewTodoForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dueDateInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDueDate = dueDateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      image: enteredImage,
      dueDate: enteredDueDate,
      description: enteredDescription,
    };

    props.onCreateTodo(todoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Due Date</label>
          <input type="text" required id="title" ref={dueDateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="title">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Todo</button>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;
