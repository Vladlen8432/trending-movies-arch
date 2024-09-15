import { NavLink } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

import Navigation from "../Navigation/Navigation";
import css from "./header.module.css";

const Header = () => {
  return (
    <div className={css.containerHeader}>
      <header className={`${css.container} ${css.headerItem}`}>
        <h1 className={css.headerLogo}>
          <NavLink className={css.mainLogo} to="/">
            TOP MOVIES
          </NavLink>
          <RiMovie2Fill className={css.mainLogoIcon} />
        </h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
