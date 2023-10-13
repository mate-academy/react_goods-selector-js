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
      <h1 className="title is-flex is-align-items-center">
        {food
          ? (
            <>
              {`${food} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setFood('')}
              />
            </>
          )
          : (
            'No goods selected'
          )}
      </h1>

      {goods.map(good => (
        <table className="table">
          <tbody>
            <tr data-cy="Good" className={`${food === good ? 'has-background-success-light' : ''}`}>
              {food === good
                ? (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setFood('')}
                    >
                      -
                    </button>
                  </td>
                )
                : (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setFood(good)}
                    >
                      +
                    </button>
                  </td>
                )
              }

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </main>
  );
};
