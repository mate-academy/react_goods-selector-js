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
  const [goodSelected, selectGood] = useState('Jam');

  return (
    <main className="section container">
      {goodSelected.length > 0 ? (
        <h1 className="title is-flex is-align-items-center">
          {goodSelected}
          {' '}
          is selected

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => selectGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={good === goodSelected
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  data-cy={good === goodSelected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === goodSelected
                    ? 'button is-info'
                    : 'button'}
                  onClick={() => (
                    good === goodSelected ? selectGood('') : selectGood(good)
                  )}
                >
                  { good === goodSelected ? '-' : '+' }
                </button>
              </td>

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
