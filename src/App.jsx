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

export const App = () => {
  const [good, setGood] = useState('Jam');

  const getClassName = el => (
    good === el ? 'has-background-success-light' : ''
  );

  const reset = () => setGood('');

  return (
    <main className="section container">
      {good
        ? (
          <h1 className="title is-flex is-align-items-center">
            { good }
            {` is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={reset}
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
          {goods.map(el => (
            <tr
              key={el}
              data-cy="Good"
              className={getClassName(el)}
            >
              <td>
                {good === el
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={reset}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setGood(el)}
                    >
                      +
                    </button>
                  )
                }
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
