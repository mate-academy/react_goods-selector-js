import 'bulma/css/bulma.css';
import { useState } from 'react';
import cn from 'classnames';

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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearGood = () => setSelectedGood('');

  const selectGood = (good) => {
    if (good === selectedGood) {
      clearGood();
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      {
        selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearGood}
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
          {
            goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn(
                      'button',
                      { 'is-info': selectedGood === good },
                    )}
                    onClick={() => selectGood(good)}
                  >
                    {selectedGood === good ? '-' : '+'}
                  </button>
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
