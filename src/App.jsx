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
  const [value, setValue] = useState(goods[8]);

  return (
    <main className="section container">
      {!value ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
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
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={`${good === value ? 'has-background-success-light' : ''}`}
              key={good}
            >
              <td>
                <button
                  data-cy={`${good === value ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`${good === value ? 'button is-info' : 'button'}`}
                  onClick={() => (
                    good === value ? setValue(null) : setValue(good)
                  )}
                >
                  {good === value ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </main>
  );
};
