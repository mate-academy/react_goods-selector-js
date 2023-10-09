import 'bulma/css/bulma.css';
import './App.scss';
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
  const [dish, setDish] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {dish
          ? `${dish} is selected`
          : `No goods selected`
        }
        {dish
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setDish('')}
            />
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good.id}
              data-cy="Good"
              className={dish === good
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  data-cy={dish === good
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={`button ${dish === good && 'is-info'}`}
                  onClick={dish === good
                    ? () => setDish('')
                    : () => setDish(good)
                  }
                >
                  {dish === good
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
