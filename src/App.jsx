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
  const [chosenGood, setChosenGood] = useState('Jam');

  const clearSelection = () => {
    setChosenGood('');
  };

  const selectGood = good => {
    setChosenGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {chosenGood ? `${chosenGood} is selected` : 'No goods selected'}
        {chosenGood && (
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        {goods.map(good => (
          <tr
            data-cy="Good"
            className={`${chosenGood === good ? 'has-background-success-light' : ''}`}
          >
            {chosenGood !== good ? (
              <td>
                <button
                  onClick={() => selectGood(good)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              </td>
            ) : (
              <td>
                <button
                  onClick={clearSelection}
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              </td>
            )}
            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
};
