// require('dotenv').config({ path: __dirname + '/../.env' });

import React from 'react'
import Head from 'next/head'

import Navbar from './../components/navbar';

const API_KEY = process.env.API_KEY;

const Home = () => (
  <div>
    <Head>
      <title>Movie Hooked!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />
    {API_KEY}

    <style global jsx>{`
      body {
        margin: 0;
      }
    `}</style>
  </div>
)

export default Home
