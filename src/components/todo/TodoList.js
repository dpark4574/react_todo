import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul className={classes.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          image={todo.image}
          title={todo.title}
          address={todo.address}
          description={todo.description}
        />
      ))}
    </ul>
  );
}

export default TodoList;
