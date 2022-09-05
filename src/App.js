import { Route, Switch } from "react-router-dom";
import AllTodoLists from "./pages/AllTodoLists";
import NewTodoList from "./pages/NewTodoList";
import Favorites from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
