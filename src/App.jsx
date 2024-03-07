import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

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

  const clearSelection = () => setSelectedGood('');

  const isSelected = good => good === selectedGood;

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

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              key={good}
              data-cy="Good"
              className={isSelected(good) ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${isSelected(good) ? 'is-info' : ''}`}
                  onClick={
                    isSelected(good)
                      ? clearSelection
                      : () => setSelectedGood(good)
                  }
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
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
};
