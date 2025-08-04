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
  const [selectedGood, setSelectedGood] = useState(goods.indexOf('Jam'));

  return (
    <main className="section container">
      {selectedGood === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goods[selectedGood]} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, indexOfGood) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === indexOfGood
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                {selectedGood === indexOfGood ? (
                  <button
                    onClick={() => setSelectedGood(null)}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGood(indexOfGood)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
