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

  function handleClearSelection() {
    setSelectedGood('');
  }

  function handleRemoveSelection() {
    setSelectedGood('');
  }

  function handleSelectGood(good) {
    setSelectedGood(good);
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
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
            let button = null;

            if (selectedGood === '') {
              button = (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleSelectGood(good)}
                >
                  +
                </button>
              );
            } else if (good === selectedGood) {
              button = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleRemoveSelection}
                >
                  -
                </button>
              );
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>{button}</td>
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
