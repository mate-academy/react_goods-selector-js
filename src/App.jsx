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

  function onClearButton() {
    setSelectedGood('');
  }

  function addGood(goodItem) {
    setSelectedGood(goodItem);
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={onClearButton}
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
          {goods.map(goodItem => (
            <tr
              key={goodItem}
              data-cy="Good"
              className={
                selectedGood === goodItem
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {selectedGood !== goodItem && (
                  <button
                    onClick={() => addGood(goodItem)}
                    data-cy="AddButton"
                    type="button"
                    className="button is-normal is-success"
                  >
                    +
                  </button>
                )}
                {selectedGood === goodItem && (
                  <button
                    onClick={onClearButton}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {goodItem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
