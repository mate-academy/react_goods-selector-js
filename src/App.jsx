import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
import cn from 'classnames';

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

  const resetGood = () => {
    setSelectedGood(null);
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetGood}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((item, index) => {
            return (
              <tr
                data-cy="Good"
                key={item}
                className={cn({
                  'has-background-success-light': item === selectedGood,
                })}
              >
                <td>
                  {item !== selectedGood ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(item)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="removeButton"
                      type="button"
                      className="button"
                      onClick={resetGood}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
