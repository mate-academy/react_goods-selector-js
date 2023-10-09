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
  const [food, setFood] = useState('Jam');

  return (
    <main className="section container">
      {food.length !== 0 ? (

        <h1 className="title is-flex is-align-items-center">
          {`${food} is selected`}

          <button
            onClick={() => setFood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      {goods.map(good => (
        <table className="table">
          <tbody>
            {food === good ? (
              <tr data-cy="Good" className="has-background-success-light">
                <td>
                  <button
                    onClick={() => setFood('')}
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
            ) : (
              <tr data-cy="Good">
                <td>
                  <button
                    onClick={() => setFood(good)}
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
            )}
          </tbody>
        </table>
      ))}
    </main>
  );
};
