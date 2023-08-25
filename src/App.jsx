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
  const [goodSelected, setGoodSelected] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected
          ? `${goodSelected} is selected`
          : 'No goods selected'
        }
        {goodSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodSelected('')}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = good === goodSelected;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn(
                  { 'has-background-success-light': isGoodSelected },
                )}
              >
                <td>
                  <button
                    onClick={() => {
                      setGoodSelected(
                        isGoodSelected
                          ? ''
                          : good,
                      );
                    }}
                    data-cy={isGoodSelected
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={cn('button',
                      {
                        'is-info': isGoodSelected,
                      })}
                  >
                    {isGoodSelected
                      ? ('-')
                      : ('+')}
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
