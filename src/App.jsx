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
  const [value, setValue] = useState('Jam');
  const currentSelected = value;

  return (
    <main className="section container">

      {value !== 'No goods selected' ? (
        <h1 className="title is-flex is-align-items-center">
          {value}
          {` is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('No goods selected');
            }}
          />
        </h1>
      )
        : (
          <h1 className="title is-flex is-align-items-center">
            {value}
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            good === currentSelected ? (
              <tr
                data-cy="Good"
                className="has-background-success-light"
                key={good}
              >
                <td>
                  <button
                    type="button"
                    className="button is-info"
                    data-cy="RemoveButton"
                    onClick={() => {
                      setValue('No goods selected');
                    }}
                  >
                    -
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {good}
                </td>
              </tr>
            ) : (
              <tr
                data-cy="Good"
                key={good}
              >
                <td>
                  <button
                    type="button"
                    className="button"
                    data-cy="AddButton"
                    onClick={() => {
                      setValue(good);
                    }}
                  >
                    +
                  </button>
                </td>
                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
