import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        )}
      </h1>

      {goods.map(item => (
        <table className="table" key={item}>
          <tbody>
            <tr
              data-cy="Good"
              className={
                selectedGood === item ? 'has-background-success-light' : ''
              }
            >
              <td>
                {!selectedGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(item);
                    }}
                  >
                    +
                  </button>
                )}
                {selectedGood === item && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={clearSelection}
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
