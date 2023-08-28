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

const DEFAULT_GOOD = 'Jam';
const CLEARED_SELECTED_GOOD = '';
const SELECT_BUTTON_VALUE = '+';
const CLEAR_BUTTON_VALUE = '-';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : `No goods selected`
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(CLEARED_SELECTED_GOOD)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': isSelectedGood })
                }
              >
                <td>
                  <button
                    data-cy={
                      isSelectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                        cn('button', { 'is-info': isSelectedGood })
                      }
                    onClick={
                      isSelectedGood
                        ? () => setSelectedGood(CLEARED_SELECTED_GOOD)
                        : () => setSelectedGood(good)
                    }
                  >
                    {isSelectedGood
                      ? CLEAR_BUTTON_VALUE
                      : SELECT_BUTTON_VALUE
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
