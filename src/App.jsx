import './App.scss';
import 'bulma/css/bulma.css';

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
  const [value, setValue] = useState(goods[8]);
  const reset = () => setValue('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value
          ? `${value} is selected`
          : 'No goods selected'}

        {value && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames(
                { 'has-background-success-light': good === value },
              )}
            >
              <td>
                <button
                  data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames(
                    'button',
                    { 'is-info': good === value },
                  )}
                  onClick={() => {
                    if (good === value) {
                      reset();

                      return;
                    }

                    setValue(good);
                  }}
                >
                  {good === value ? '+' : '-'}
                </button>
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
