import 'bulma/css/bulma.css';
import './App.scss';

import classNames from 'classnames';
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
  const [selectedGood, setState] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood === '' && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {selectedGood !== '' && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          {selectedGood.length > 0 && (
            <button
              onClick={() => setState('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )}
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames('is-vcentered', {
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>
                {selectedGood === good ? (
                  <button
                    onClick={() => setState('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setState(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button is-danger"
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle">{good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
