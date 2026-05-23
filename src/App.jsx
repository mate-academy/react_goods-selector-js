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
  const [currentGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!currentGood ? (
          'No goods selected'
        ) : (
          <>
            {currentGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              data-cy="Good"
              key={g}
              className={
                currentGood === g ? 'has-background-success-light' : ''
              }
            >
              <td>
                {currentGood !== g ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setValue(g)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setValue('')}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {g}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
