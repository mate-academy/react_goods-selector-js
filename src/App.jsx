import { useState } from 'react';
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
  const [isSelected, setSelectedGood] = useState(goods[8]);

  const selectGood = good => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected ? `${isSelected} is selected` : 'No goods selected'}
        {isSelected && (
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === isSelected ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  onClick={() => selectGood(good === isSelected ? '' : good)}
                  data-cy={good === isSelected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === isSelected ? 'button is-info' : 'button'}
                >
                  {good === isSelected ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
