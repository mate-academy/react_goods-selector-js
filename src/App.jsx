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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              onClick={() => setSelectedGood(null)}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  {isGoodSelected
                    ? (
                      <button
                        onClick={() => setSelectedGood(null)}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedGood(good)}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )}
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
