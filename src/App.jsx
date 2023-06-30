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
  const [selectedGood, changeGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          selectedGood
            ? (
              <>
                {`${selectedGood} is selected`}

                <button
                  onClick={() => changeGood('')}
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                />
              </>
            )
            : ('No goods selected')
        }
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': selectedGood === good,
                })}
                key={good}
              >
                <td>
                  {
                    selectedGood === good
                      ? (
                        <button
                          onClick={() => {
                            changeGood('');
                          }}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          onClick={() => {
                            changeGood(good);
                          }}
                          data-cy="AddButton"
                          type="button"
                          className="button"
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
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
