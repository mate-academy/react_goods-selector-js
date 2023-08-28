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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const isSelected = good => good === selectedGood;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      {selectedGood
        && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setSelectedGood('');
          }}
        />
        )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = isSelected(good);

            return (
              <tr
                data-cy="Good"
                className={cn('', {
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  {isGoodSelected ? (
                    <button
                      onClick={() => {
                        setSelectedGood('');
                      }}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedGood(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )}
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
