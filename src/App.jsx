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

  function touchGood(good) {
    return setSelectedGood(good);
  }

  function clearTouch() {
    return setSelectedGood(null);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : `No goods selected`}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearTouch}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(currentGood => (
            <tr
              key={currentGood}
              data-cy="Good"
              className={selectedGood === currentGood
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                {selectedGood !== currentGood
                  ? (
                    <button
                      type="button"
                      className="button"
                      data-cy="AddButton"
                      onClick={() => touchGood(currentGood)}
                    >
                      +
                    </button>
                  )
                  : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={clearTouch}
                    >
                      -
                    </button>
                  )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {currentGood}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
