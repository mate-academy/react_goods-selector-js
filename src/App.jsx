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
  const DEFAULT_VALUE = 'Jam';
  const [selectedGood, setSelectedGood] = useState(DEFAULT_VALUE);

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
        }

        {selectedGood && (
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
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': isGoodSelected })
                }
              >
                <td>
                  <button
                    data-cy={
                      isGoodSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      cn('button', { 'is-info': isGoodSelected })
                    }
                    onClick={
                      isGoodSelected
                        ? () => setSelectedGood('')
                        : () => setSelectedGood(good)
                    }
                  >
                    {isGoodSelected ? '-' : '+'}
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
