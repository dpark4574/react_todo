import { Route, Switch } from "react-router-dom";
import AllTodoLists from "./pages/AllTodoLists";
import NewTodoList from "./pages/NewTodoList";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllTodoLists />
        </Route>
        <Route path="/new-todo">
          <NewTodoList />
        </Route>
        <Route path="/Favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
