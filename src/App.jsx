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
  const [
    currentValue, setCurrentValue,
  ] = useState('Jam');

  return (
    <main className="section container">
      {currentValue ? (
        <h1 className="title is-flex is-align-items-center">
          {`${currentValue} is selected`}

          <button
            onClick={() => setCurrentValue('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={`${currentValue === good
                ? 'has-background-success-light'
                : ''}`
              }
            >
              <td>
                {currentValue !== good ? (
                  <button
                    onClick={() => setCurrentValue(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )
                  : (
                    <td>
                      <button
                        onClick={() => setCurrentValue('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>

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
