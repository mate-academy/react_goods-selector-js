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
          {goods.map(good => {
            let buttonToRender = null; // Default to rendering nothing

            if (selectedGood === '') {
              // Rule 1: No good is selected, show AddButton for all
              buttonToRender = (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleSelect(good)}
                >
                  +
                </button>
              );
            } else if (good === selectedGood) {
              // Rule 2: A good is selected, and this is the selected row, show RemoveButton
              buttonToRender = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleClear}
                >
                  -
                </button>
              );
            }
            // Rule 3: A good is selected, but this is NOT the selected row (buttonToRender remains null)

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {/* Render the determined button or null */}
                  {buttonToRender}
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
