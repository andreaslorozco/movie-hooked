import React from 'react';

const searchResults = ({ results }) => (
  <div className='results'>
    {results.map((result) => (
      <div className='result'>
        <h2>{result.Title}</h2>
        <img alt={`Imagen de ${result.Title}`} src={result.Poster} />
        <h3>{result.Year}</h3>
      </div>
    ))}

    <style jsx>
      {`
        .results {
          display: flex;
          flex-wrap: wrap;
          width: 90%;
          justify-content: space-between;
        }
        .result {
          width: 300px;
          border: 1px solid black;
        }
      `}
    </style>
  </div>
);

export default searchResults;
