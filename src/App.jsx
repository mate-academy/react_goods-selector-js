import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

const DEFAULT_GOOD = 'Jam';
const NO_GOOD_SELECTED = '';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  DEFAULT_GOOD,
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== NO_GOOD_SELECTED ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood(NO_GOOD_SELECTED)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'}
                    onClick={() => setSelectedGood(isSelected
                      ? NO_GOOD_SELECTED
                      : good)}
                  >
                    {isSelected ? '-' : '+'}
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
