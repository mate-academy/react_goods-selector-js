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

  function selectGood(clickEvent) {
    const good = clickEvent.target.value;

    if (selectedGood === good) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  }

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
            onClick={selectGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {
                  selectedGood === good
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={selectGood}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={selectGood}
                        value={good}
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
          ))}
        </tbody>
      </table>
    </main>
  );
};
