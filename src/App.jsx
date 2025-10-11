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

  function handleSelectGood(good) {
    setSelectedGood(good);
  }

  function handleClearSelection() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => handleClearSelection()}
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
            let button = null;

            if (isSelected) {
              button = (
                <button
                  onClick={handleClearSelection}
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              );
            } else if (!selectedGood) {
              button = (
                <button
                  onClick={() => handleSelectGood(x)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              );
            }

            return (
              <tr
                key={x}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>{button}</td>
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
