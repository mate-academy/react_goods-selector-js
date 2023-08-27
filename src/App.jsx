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

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        { selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setSelectedGood('')}
              />
            </>
          )
          : 'No goods selected'
            }
      </h1>

      <table className="table">
        <tbody>

          {goods.map((item) => {
            const isSelectedItem = selectedGood === item;

            return (
              <tr
                data-cy="Good"
                className={cn(
                  {
                    'is-vcentered': !isSelectedItem,
                    'has-background-success-light': isSelectedItem,
                  },
                )}
              >
                <td>
                  <button
                    data-cy={
                      isSelectedItem
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={cn(
                      'button',
                      {
                        'is-info': isSelectedItem,
                      },
                    )}
                    onClick={() => setSelectedGood(
                      isSelectedItem
                        ? ''
                        : item,
                    )
                    }
                  >
                    {isSelectedItem
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
