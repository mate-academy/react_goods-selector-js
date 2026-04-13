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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isSelected = selectedGood !== '';

  const handleSelectGood = good => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected ? `${selectedGood} is selected` : 'No goods selected'}

        {isSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isGoodSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {/* AddButton: показывается для всех НЕ выбранных товаров */}
                  {!isGoodSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelectGood(good)}
                    >
                      +
                    </button>
                  )}

                  {/* RemoveButton: только для выбранного товара */}
                  {isGoodSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClearSelection}
                    >
                      -
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
