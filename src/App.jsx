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
  const [selectedGood, select] = useState('Jam');

  return (
    <main className="section container">
      {!selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                select('');
              }}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            good !== selectedGood
              ? (
                <tr
                  data-cy="Good"
                  className=""
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        select(good);
                      }}
                    >
                      +
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
              : (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        select('');
                      }}
                    >
                      -
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
