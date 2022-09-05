import TodoList from "../components/todo/TodoList";

const DUMMY_DATA = [
  {
    id: "t1",
    title: "First Todo List",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is the first todolist.",
  },
  {
    id: "t2",
    title: "Second Todo List",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is the second todo list",
  },
];

function AllTodoLists() {
  return (
    <section>
      <h1>All Todos</h1>
      <TodoList todos={DUMMY_DATA} />
    </section>
  );
}
export default AllTodoLists;
