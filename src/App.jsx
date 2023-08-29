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

const DEFAULT_SELECTED_GOOD = 'Jam';
const NO_GOOD_SELECTOR = 'No goods selected';
const IS_SELECT = 'is selected';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_SELECTED_GOOD);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} ${IS_SELECT}`
          : NO_GOOD_SELECTOR
        }

        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((goodItem) => {
            const hasSelectedGood = selectedGood === goodItem;

            return (
              <tr
                key={goodItem}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': hasSelectedGood,
                })}
              >
                <td>
                  <button
                    onClick={() => setSelectedGood(
                      hasSelectedGood
                        ? ''
                        : goodItem,
                    )}
                    data-cy={
                      hasSelectedGood
                        ? 'RemoveButton'
                        : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': hasSelectedGood,
                    })}
                  >
                    {hasSelectedGood
                      ? '-'
                      : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodItem}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
