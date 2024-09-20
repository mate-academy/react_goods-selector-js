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
  const [selectedItem, setSelectedItem] = useState('Jam');

  const handleItemClick = good => {
    if (selectedItem === good) {
      setSelectedItem(null);
    } else {
      setSelectedItem(good);
    }
  };

  const resetSelectedGood = () => setSelectedItem(null);

  const titleText = selectedItem
    ? `${selectedItem} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}

        {selectedItem && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetSelectedGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedItem === good;

            const rowClass = isSelected ? 'has-background-success-light' : '';

            const buttonClass = isSelected ? 'button is-info' : 'button';

            const buttonText = isSelected ? '-' : '+';

            return (
              <tr key={good} data-cy="Good" className={rowClass}>
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={buttonClass}
                    onClick={() => handleItemClick(good)}
                  >
                    {buttonText}
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
