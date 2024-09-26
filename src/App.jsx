/* eslint-disable no-unused-expressions */

import 'bulma/css/bulma.css';
import { useState } from 'react';
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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGood = value === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isGood && 'has-background-success-light'}
              >
                <td>
                  <button
                    data-cy={isGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isGood ? 'button is-info' : 'button'}
                    onClick={() => {
                      !isGood ? setValue(good) : setValue(null);
                    }}
                  >
                    {isGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
