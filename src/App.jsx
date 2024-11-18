/* eslint-disable function-paren-newline */
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
  const [good, setGood] = useState('Jam');
  const removeGood = () => setGood('');

  return (
    <main className="section container">
      {good ? (
        <h1 className="title is-flex is-align-items-center">
          {`${good} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGood}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(n =>
            good !== n ? (
              <tr data-cy="Good" key={n}>
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setGood(n)}
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {n}
                </td>
              </tr>
            ) : (
              <tr data-cy="Good" className="has-background-success-light">
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={removeGood}
                  >
                    -
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {n}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
};
