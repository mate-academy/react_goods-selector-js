import 'bulma/css/bulma.css';
import cn from 'classnames';

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

const DEFAULT_VALUE = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_VALUE);

  const handleGoodClick = good => setSelectedGood(good);

  const handleClearProduct = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          'No goods selected'
        ) : (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={handleClearProduct}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )}
      </h1>

      <table className="table">
        {goods.map(good => {
          const isGoodSelected = selectedGood === good;

          return (
            <tbody key={good}>
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  <button
                    onClick={
                      isGoodSelected
                        ? handleClearProduct
                        : () => handleGoodClick(good)
                    }
                    data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': isGoodSelected,
                    })}
                  >
                    {isGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </main>
  );
};
