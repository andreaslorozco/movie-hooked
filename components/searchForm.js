import React from "react";

const SearchForm = ({ submitHandler, changeHandler }) => {
  return(
    <form onSubmit={submitHandler}>
      <label>Search for a movie:</label>
      <input type='text' onChange={changeHandler}></input>
      <button type='submit'>Search</button>
    </form>
  )
};

export default SearchForm;