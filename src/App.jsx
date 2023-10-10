import 'bulma/css/bulma.css';
import { useState } from 'react';
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

let counter = 0;

const fullGoods = goods.map((good) => {
  counter += 1;

  return ({
    good,
    id: counter,
  });
});

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center"
      >
        {!selectedGood
          ? 'No goods selected'
          : `${selectedGood} is selected`

        }
        {selectedGood
        && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {fullGoods.map(({ good, id }) => {
            const isActive = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={
                  isActive
                  && 'has-background-success-light'
                }
                key={id}
              >
                <td>
                  <button
                    data-cy={isActive
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={isActive
                      ? 'button is-info'
                      : 'button'
                    }
                    onClick={good === selectedGood
                      ? () => setSelectedGood('')
                      : () => setSelectedGood(good)
                    }
                  >
                    {
                      isActive ? '-' : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
