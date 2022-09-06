import NewTodoForm from "../components/todo/NewTodoForm";
import { useHistory } from "react-router-dom";

function NewTodoList() {
  const history = useHistory();

  function createTodo(todoData) {
    fetch("https://react-todo-5cbba-default-rtdb.firebaseio.com/todos.json", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Todo</h1>
      <NewTodoForm onCreateTodo={createTodo} />
    </section>
  );
}
export default NewTodoList;
