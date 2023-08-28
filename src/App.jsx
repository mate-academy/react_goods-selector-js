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

const initialSelectedGood = goods[8];

export const App = () => {
  const [selectGood, setSelectGood] = useState(initialSelectedGood);

  const handleProductClick = product => setSelectGood(product);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood ? (
          <>
            <span>{`${selectGood} is selected`}</span>
            <button
              onClick={() => {
                setSelectGood(null);
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )
          : ('No goods selected')
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    onClick={() => handleProductClick(isSelected ? '' : good)}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'is-info': isSelected,
                    })}
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
