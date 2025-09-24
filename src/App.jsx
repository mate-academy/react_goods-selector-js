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
  const [selectedGood, setSelectedGood] = useState('Jam'); // default Jam
  const hasSelection = selectedGood !== '';

  // named handlers (verb-first)
  const handleClear = () => setSelectedGood('');
  const handleSelect = good => setSelectedGood(good);

  return (
    <main className="section container">
      {hasSelection ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
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
            const isSelected = good === selectedGood;

            const addButton = (
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => handleSelect(good)}
              >
                +
              </button>
            );

            const removeButton = (
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={handleClear}
              >
                -
              </button>
            );

            let actionButton = null;

            if (isSelected) {
              actionButton = removeButton;
            } else {
              // ВАЖЛИВО: AddButton завжди видимий для не вибраних рядків
              actionButton = addButton;
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isSelected ? 'has-background-success-light' : undefined
                }
              >
                <td>{actionButton}</td>

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
