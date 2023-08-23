import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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

  const addGood = good => setSelectedGood(good);
  const clearGood = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood.length
          ? (
            'No goods selected'
          )
          : (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={clearGood}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': good === selectedGood,
              })}
            >
              <td>
                <button
                  type="button"
                  className={cn(
                    'button',
                    { 'is-info': good === selectedGood },
                  )}
                  onClick={() => (
                    good === selectedGood
                      ? clearGood()
                      : addGood(good)
                  )}
                  data-cy={good === selectedGood
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                >
                  {good === selectedGood
                    ? '-'
                    : '+'
                  }
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
