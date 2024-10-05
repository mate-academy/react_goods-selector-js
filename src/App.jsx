import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearSelection = () => {
    setSelectedGood('');
  }

  const selectGood = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>
  
      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr 
              data-cy="Good"
              key={good}
              className={selectedGood === good ? 'has-background-success-light' : ''}
            >
            <td>
              {selectedGood === good ? (
                <button 
                  data-cy="RemoveButton" 
                  type="button" 
                  className="is-info"
                  onClick={clearSelection}
                >
                -
              </button>
              ) : (
                <button 
                  data-cy="AddButton" 
                  type="button" 
                  className="button"
                  onClick={() => selectGood(good)}
                >
                  +
                </button>
              )}
            </td>
  
            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

