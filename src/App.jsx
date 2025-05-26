import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [headerValue, setHeaderValue] = useState('Jam');

  return (
    <main className="section container">
      {goods.find(good => good === headerValue) ? (
        <h1 className="title is-flex is-align-items-center">
          {headerValue} is selected
          <button
            onClick={() => setHeaderValue('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={classNames({
                'has-background-success-light': good === headerValue,
              })}
              data-cy="Good"
            >
              <td>
                {' '}
                {good === headerValue ? (
                  <button
                    onClick={() => setHeaderValue('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setHeaderValue(good);
                    }}
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
