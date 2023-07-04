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
  const [currentValue, setCurrentValue] = useState('Jam');

  const clear = () => {
    setCurrentValue('');
  };

  return (
    <main className="section container">
      {currentValue ? (
        <h1 className="title is-flex is-align-items-center">
          {`${currentValue} is selected`}

          <button
            onClick={clear}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
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
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === currentValue,
              })}
            >
              <td>
                {currentValue !== good ? (
                  <button
                    onClick={() => setCurrentValue(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )
                  : (
                    <td>
                      <button
                        key={good}
                        onClick={() => setCurrentValue('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>

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
