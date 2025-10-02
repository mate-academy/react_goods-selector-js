import 'bulma/css/bulma.css';
import './App.scss';
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

  const handleSelect = good => {
    setSelectedGood(good);
  };

  const handleClear = () => {
    setSelectedGood('');
  };

  const titleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const hasSelection = Boolean(selectedGood); // 👈 удобно вынести один раз

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {hasSelection && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClear}
                    >
                      -
                    </button>
                  )}

                  {!isSelected && !hasSelection && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelect(good)}
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
