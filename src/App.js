import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="CMSC330 Project 1" />
      <Todo text="ENEE303 HW" />
      <Todo text="ENEE303 Lecture Quiz 2" />
    </div>
  );
}

export default App;
