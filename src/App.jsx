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

const ADD = '+';
const REMOVE = '-';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
        }

        {selectedGood
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood(null)}
            />
          )
        }

      </h1>

      <table className="table">
        <tbody>
          {
            goods.map((good) => {
              const isGoodSelected = good === selectedGood;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={classNames(
                    {
                      'has-background-success-light': isGoodSelected,
                    },
                  )}
                >
                  <td>
                    <button
                      data-cy={classNames(isGoodSelected
                        ? 'RemoveButton'
                        : 'AddButton')}
                      type="button"
                      className={classNames('button',
                        { 'is-info': isGoodSelected })}
                      onClick={() => (isGoodSelected
                        ? setSelectedGood(null)
                        : setSelectedGood(good)
                      )}
                    >
                      {isGoodSelected ? REMOVE : ADD}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </main>
  );
};
