import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Todo List</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Todos</Link>
          </li>
          <li>
            <Link to="/new-todo">New Todo</Link>
          </li>
          <li>
            <Link to="/favorites">Favorite Todos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
