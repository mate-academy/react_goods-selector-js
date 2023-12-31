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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const reset = () => setSelectedGood(empty);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== empty
          ? (
            <>
              {`${selectedGood} is selected`}

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
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                className={isGoodSelected && 'has-background-success-light'}
                data-cy="Good"
                key={good}
              >
                <td>
                  {(selectedGood !== good)
                    ? (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => setSelectedGood(reset)}
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
