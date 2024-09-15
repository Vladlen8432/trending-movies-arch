import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={css.containerNavigation}>
      <nav className={css.navigationItem}>
        <ul className={css.listHeader}>
          <li>
            <NavLink className={css.navLinkHeader} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navLinkHeader} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
