import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/navbar';
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';

const { API_KEY } = process.env;

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}`);
    //   const data = await response.json();
    //   console.log('data', data);
    // }
    // fetchData();
  }, []);

  const searchInputChangeHanlder = (e) => {
    setSearchInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInput}`);
    const data = await response.json();
    setSearchResults(data.Search);
  };

  return (
    <div>
      <Head>
        <title>Movie Hooked!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <SearchForm submitHandler={submitHandler} changeHandler={searchInputChangeHanlder} />

      <SearchResults results={searchResults} />


      <style global jsx>
        {`
        body {
          margin: 0;
        }
      `}
      </style>
    </div>
  );
};

export default Home;
