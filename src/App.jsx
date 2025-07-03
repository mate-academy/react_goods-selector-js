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

  const clearSelection = () => setSelectedGood('');
  const selectGood = good => setSelectedGood(good);
  const removeSelection = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>{good}</td>
              <td>
                {!selectedGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    onClick={() => selectGood(good)}
                  >
                    AddButton
                  </button>
                )}
                {selectedGood === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    onClick={removeSelection}
                  >
                    RemoveButton
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
