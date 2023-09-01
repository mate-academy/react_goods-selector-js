import 'bulma/css/bulma.css';
import './App.scss';

import cn from 'classnames';
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

const isCurrentGoodSelect = (selectGood, currentGood) => (
  selectGood === currentGood
);

export const App = () => {
  const [selectGood, setSelectGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood === '' ? (
          'No goods selected'
        ) : (
          <>
            {`${selectGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectGood('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn(
                'Good',
                { 'has-background-success-light':
                  isCurrentGoodSelect(selectGood, good) },
              )}
            >
              <td>
                <button
                  data-cy={isCurrentGoodSelect(selectGood, good) ? (
                    'RemoveButton') : (
                    'AddButton')
                  }
                  type="button"
                  className={cn(
                    'button',
                    { 'is-info': isCurrentGoodSelect(selectGood, good) },
                  )}
                  onClick={() => (
                    isCurrentGoodSelect(selectGood, good) ? (
                      setSelectGood('')) : (
                      setSelectGood(good))
                  )}
                >
                  {isCurrentGoodSelect(selectGood, good) ? '-' : '+'}
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
