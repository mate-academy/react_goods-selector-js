import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
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
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      {!good ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
        : (
          <h1
            className="title is-flex is-align-items-center"
          >
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood('')}
            />
          </h1>
        )}

      <table className="table">
        <tbody>

          {goods.map(name => (
            <tr
              data-cy="Good"
              className={cn(
                { 'has-background-success-light': good === name },
              )}
            >
              <td>
                { good !== name
                  ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setGood(name)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setGood('')}
                    >
                      -
                    </button>
                  )
                }
              </td>
              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
