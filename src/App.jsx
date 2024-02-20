import React from 'react';

import 'bulma/css/bulma.css';
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
  const [selectedGood, setSelectedGood] = React.useState('Jam');

  const getGood = good => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
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
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>
                {good === selectedGood ? (
                  <button
                    onClick={clearSelection}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => getGood(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
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
