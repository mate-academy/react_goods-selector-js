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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectGood = (good) => {
    setSelectedGood(good);
  };

  const clearSelectedGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {!selectedGood
          ? 'No goods selected'
          : (
            <>
              {`${selectedGood} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearSelectedGood}
              />
            </>
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selectedItem = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': selectedItem,
                })}
              >
                <td>
                  <button
                    type="button"
                    className={cn('button',
                      { 'is-info': selectedItem })}
                    onClick={() => (
                      selectedItem
                        ? clearSelectedGood()
                        : selectGood(good)
                    )}
                    data-cy={selectedItem
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  >
                    {selectedItem
                      ? '-'
                      : '+'
                  }
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
