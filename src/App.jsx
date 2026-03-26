import { useState } from 'react';

import 'bulma/css/bulma.css';
import './App.scss';

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

const EMPTY_SELECTION = '';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === EMPTY_SELECTION
          ? 'No goods selected'
          : `${selectedGood} is selected`}
        {selectedGood !== EMPTY_SELECTION && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(EMPTY_SELECTION)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good
                  ? 'has-background-success-light has-text-black'
                  : ''
              }
            >
              <td>
                {selectedGood === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood(EMPTY_SELECTION)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good)}
                  >
                    +
                  </button>
                )}
              </td>

              <td
                data-cy="GoodTitle"
                className="is-vcentered"
                style={{ color: 'inherit' }}
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
