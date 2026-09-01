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
  const [goodValue, selectedGood] = useState('Jam');

  const select = good => {
    if (good === goodValue) {
      selectedGood('');
    } else {
      selectedGood(good);
    }
  };

  return (
    <main className="section container">
      {goodValue ? (
        <h1 className="title is-flex is-align-items-center">
          {goodValue} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => selectedGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === goodValue;

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
                    data-cy={cn({
                      AddButton: !isSelected,
                      RemoveButton: isSelected,
                    })}
                    type="button"
                    className={cn({
                      button: !isSelected,
                      'button is-info': isSelected,
                    })}
                    onClick={() => {
                      select(good);
                    }}
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
