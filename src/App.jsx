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
  const isSelected = product => product === item;
  const removeClick = product => (
    isSelected(product)
      ? setItem('')
      : setItem(product)
  );

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
          {goods.map(nameOfItem => (
            <tr
              data-cy="Good"
              key={nameOfItem}
              className={cn({
                'has-background-success-light': isSelected(nameOfItem),
              })}
            >
              <td>
                <button
                  data-cy={isSelected(nameOfItem)
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={cn('button', {
                    'is-info': isSelected(nameOfItem),
                  })}
                  onClick={() => removeClick(nameOfItem)}
                >
                  {isSelected(nameOfItem)
                    ? '-'
                    : '+'
                  }
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {nameOfItem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
