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
  const [selectedGood, setGood] = useState('Jam');
  const handleClear = () => setGood('');
  const handleRemove = () => setGood('');
  const handleSelect = good => setGood(good);

  const renderButton = (good, isSelected, isAnySelected) => {
    if (isSelected) {
      return (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={handleRemove}
        >
          -
        </button>
      );
    }

    if (!isAnySelected) {
      return (
        <button
          data-cy="AddButton"
          type="button"
          className="button"
          onClick={() => handleSelect(good)}
        >
          +
        </button>
      );
    }

    return null;
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
            const isSelected = selectedGood === good;
            const isAnySelected = selectedGood !== '';

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>{renderButton(good, isSelected, isAnySelected)}</td>

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
