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

  const handleSelectGood = good => setSelectedGood(good);
  const handleClearSelection = () => setSelectedGood('');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={handleClearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(x => {
            const isSelected = x === selectedGood;
            return (
              <tr
                key={x}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() =>
                      isSelected ? handleClearSelection() : handleSelectGood(x)
                    }
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isSelected ? 'is-info' : ''}`}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {x}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
