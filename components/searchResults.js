import React from 'react';

const searchResults = ({ results }) => {
  return (
    <div className='results'>
      {results.map(result => {
        return (
          <div className='result'>
            <h2>{result.Title}</h2>
            <img src={result.Poster} />
            <h3>{result.Year}</h3>
          </div>
        )
      })}

      <style jsx>{`
        .results {
          display: flex;
          flex-wrap: wrap;
          width: 90%;
        }
        .result {
          width: 300px;
        }
      `}</style>
    </div>
  )
}

export default searchResults;