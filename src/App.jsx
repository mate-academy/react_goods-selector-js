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
  const [valueGood, setValueGood] = useState('Jam');
  const makeSetValueGood = good => () => setValueGood(good);

  return (
    <main className="section container">
      {
        valueGood === ''
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${valueGood} is selected`}
              <button
                onClick={makeSetValueGood('')}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              good === valueGood
                ? (
                  <tr
                    key={good}
                    data-cy="Good"
                    className="has-background-success-light"
                  >
                    <td>
                      <button
                        onClick={makeSetValueGood('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
                : (
                  <tr key={good} data-cy="Good">
                    <td>
                      <button
                        onClick={makeSetValueGood(good)}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
            ))}
        </tbody>
      </table>
    </main>
  );
};
