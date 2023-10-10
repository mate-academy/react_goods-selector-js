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

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {value
          ? (
            <>
              {`${value} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setValue(null)}
              />
            </>
          )
          : 'No goods selected'}
      </h1>

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

                <button
                  type="button"
                  data-cy={value === good
                    ? 'RemoveButton'
                    : 'AddButton'}
                  className={cn('button', {
                    'is-info': value === good,
                  })}
                  onClick={() => setValue(value === good
                    ? null
                    : good)}
                >
                  {value === good
                    ? '-'
                    : '+'
                  }
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
