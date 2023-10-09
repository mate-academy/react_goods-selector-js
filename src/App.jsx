import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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
  const [value, setValue] = useState('Jam');

  const handleOnClick = (good) => {
    if (value === good) {
      setValue(null);
    } else {
      setValue(good);
    }
  };

  return (
    <main className="section container">

      {value
        ? (
          <h1 className="title is-flex is-align-items-center">
            {value}
            {' '}
            is selected

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setValue(null)}
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
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': value === good,
              })}
              key={good}
            >
              <td>
                {value === good
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className={cn('button', {
                        'is-info': value === good,
                      })}
                      onClick={() => handleOnClick(null)}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={cn('button', {
                        'is-info': value === good,
                      })}
                      onClick={() => handleOnClick(good)}
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
