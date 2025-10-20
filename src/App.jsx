/* eslint-disable max-len */
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

  const handleClear = () => setSelectedGood('');
  const handleRemove = () => setSelectedGood('');
  const handleSelect = good => setSelectedGood(good);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center has-background-success-light">
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
            const isSelected = selectedGood === good;
            let actionButton = null;

            if (isSelected) {
              actionButton = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleRemove}
                >
                  -
                </button>
              );
            } else {
              actionButton = (
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

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
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
