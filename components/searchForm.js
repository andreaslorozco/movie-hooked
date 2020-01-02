import React from 'react';

const SearchForm = ({ submitHandler, changeHandler }) => (
  <form onSubmit={submitHandler}>
    <label htmlFor='texto'>
      Search for a movie:
      <input type='text' onChange={changeHandler} id='texto' />
    </label>
    <button type='submit'>Search</button>
  </form>
);

export default SearchForm;
