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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const addselectedGood = (good) => {
    if (selectedGood.length === 0) {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      { selectedGood === '' && (
      <h1 className="title is-flex is-align-items-center">
        No goods selected
      </h1>
      )}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          <tr
            data-cy="Good"
            className={`${selectedGood.includes('Dumplings') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {selectedGood.length > 0
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addselectedGood('Dumplings')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${selectedGood.includes('Jam') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {selectedGood.length > 0
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addselectedGood('Jam')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${selectedGood.includes('Garlic') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {selectedGood.length > 0
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addselectedGood('Garlic')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
