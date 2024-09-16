import { useState } from "react";

import { IoSearchCircleSharp } from "react-icons/io5";
import css from "./searchForm.module.css";

const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) {
      return alert("Cannot be empty");
    }
    onHandleSubmit(query);
    setQuery("");
  };
  return (
    <div className={css.containerForm}>
      <form className={css.formItem} onSubmit={handleSubmit} action="">
        <input
          className={css.inputItem}
          type="text"
          value={query}
          name="query"
          onChange={handleChange}
        />
        <button className={css.buttonItem} type="submit">
          <IoSearchCircleSharp className={css.buttonIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
