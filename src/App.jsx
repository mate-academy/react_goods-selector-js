import 'bulma/css/bulma.css';
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

  // Іменовані хендлери (тільки перенесли логіку з JSX)
  const handleClear = () => setSelectedGood('');
  const handleSelect = (good) => setSelectedGood(good);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
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
        {goods.map((good) => (
          <tr
            key={good}
            data-cy="Good"
            className={
              selectedGood === good ? 'has-background-success-light' : ''
            }
          >
            <td>
              {selectedGood === good ? (
                // Remove button для вибраного
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleClear}
                >
                  -
                </button>
              ) : (
                // Add button для інших
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
        ))}
        </tbody>
      </table>
    </main>
  );
};
