import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.scss';

import goods from './api/goods.json';

function App() {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectGood = (good) => setSelectedGood(good);
  const clearSelection = () => setSelectedGood('');

  return (
    <div className="container">
      <h1 className="title" data-cy="Title">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      {selectedGood && (
        <button
          type="button"
          className="button is-small is-light ml-3"
          onClick={clearSelection}
          data-cy="ClearButton"
        >
          Clear
        </button>
      )}

      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Good</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selectedGood
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td data-cy="GoodTitle">{good}</td>
              <td>
                {good === selectedGood ? (
                  <button
                    type="button"
                    className="button is-small is-danger is-info"
                    onClick={clearSelection}
                    data-cy="RemoveButton"
                  >
                    -
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button is-small is-primary"
                    onClick={() => selectGood(good)}
                    data-cy="AddButton"
                  >
                    +
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
