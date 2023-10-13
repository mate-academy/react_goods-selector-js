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
  const [selectedGood, setselectedGood] = useState('Jam');
  const reset = () => setselectedGood(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={good === selectedGood
                  ? 'has-background-success-light'
                  : ''
                }
              >
                <td>
                  {good === selectedGood
                    ? (
                      <button
                        data-cy="addButton"
                        type="button"
                        className="button is-info"
                        onClick={reset}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="removeButton"
                        type="button"
                        className="button"
                        onClick={() => setselectedGood(good)}
                      >
                        +
                      </button>
                    )
                  }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
