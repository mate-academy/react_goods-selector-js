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
  const [selectedGood, setselectedGood] = useState('Jam');
  const reset = () => setselectedGood('');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          <span>{`${selectedGood} is selected`}</span>

          <button
            onClick={reset}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  {isGoodSelected
                    ? (
                      <button
                        onClick={reset}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setselectedGood(good)}
                      >
                        +
                      </button>
                    ) }
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
