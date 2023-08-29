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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {!selectedGood
          ? (
            'No goods selected'
          ) : (
            <>
              {`${selectedGood} is selected`}

              <button
                onClick={() => {
                  setSelectedGood('');
                }}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )}
      </h1>

      <table className="table">
        <tbody>

          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={cn(
                      {
                        RemoveButton: isGoodSelected,
                        AddButton: !isGoodSelected,
                      },
                    )}
                    type="button"
                    className={cn('button', {
                      'is-info': isGoodSelected,
                    })}
                    onClick={() => setSelectedGood(isGoodSelected ? '' : good)}
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
