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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const activeGood = 'has-background-success-light';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
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
          : (
            'No goods selected'
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isGoodSelected ? activeGood : ''}
              >
                <td>
                  {isGoodSelected
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => setSelectedGood('')}
                      >
                        -
                      </button>
                    )

                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
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
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
