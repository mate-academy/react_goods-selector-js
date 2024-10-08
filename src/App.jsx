import 'bulma/css/bulma.css';
import './App.scss';
// import { Value } from 'sass';
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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value === null ? 'No goods selected' : `${value} is selected`}

        {value !== null && (
          <button
            onClick={() => setValue(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(
            good =>
              good === value ? (
                <tr data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      onClick={() => setValue(null)}
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
                      onClick={() => setValue(good)}
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
              ),
            // eslint-disable-next-line function-paren-newline
          )}
        </tbody>
      </table>
    </main>
  );
};
