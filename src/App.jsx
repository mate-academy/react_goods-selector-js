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
  const [selectedGood, setGood] = useState('Jam');
  const handleClear = () => {
    setGood('');
  };

  const handleSelected = good => {
    setGood(good);
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

            const shouldShowAdd = !isSelected;
            const shouldShowRemove = isSelected && selectedGood !== '';

            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {shouldShowRemove && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClear}
                    >
                      -
                    </button>
                  )}

                  {!shouldShowRemove && shouldShowAdd && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      data-good={good}
                      onClick={() => handleSelected(good)}
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
