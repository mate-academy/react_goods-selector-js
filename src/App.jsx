import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';
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
  const [item, setItem] = useState('Jam');

  return (
    <main className="section container">
      {item
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${item} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setItem('')}
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
          {goods.map((nameOfItem) => {
            const isActive = nameOfItem === item;

            return (
              <tr
                data-cy="Good"
                key={nameOfItem}
                className={cn({
                  'has-background-success-light': isActive,
                })}
              >
                <td>
                  <button
                    data-cy={isActive
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info': isActive,
                    })}
                    onClick={() => setItem(isActive ? '' : nameOfItem)}
                  >
                    {isActive ? '-' : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {nameOfItem}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
