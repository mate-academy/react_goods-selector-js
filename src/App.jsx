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
  const empty = 'No goods selected';
  const [value, setValue] = useState('Jam');
  const reset = () => setValue(empty);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {(value !== empty)
          ? (
            <>
              {`${value} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={reset}
              />
            </>
          )
          : empty
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={value === good && 'has-background-success-light'}
              data-cy="Good"
              key={good}
            >
              <td>
                {(value !== good)
                  ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setValue(good)}
                    >
                      +
                    </button>
                  )
                  : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setValue(reset)}
                    >
                      -
                    </button>
                  )
                }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
