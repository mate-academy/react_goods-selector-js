import { useState } from 'react';

const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Nuts',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <div className="App">
      <h1 className="title">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      {selectedGood && (
        <button
          type="button"
          data-cy="ClearButton"
          className="button is-danger mb-3"
          onClick={() => setSelectedGood('')}
        >
          Clear
        </button>
      )}

      <table className="table is-striped is-narrow">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td data-cy="GoodTitle">{good}</td>
                <td>
                  {!isSelected && (
                    <button
                      type="button"
                      data-cy="AddButton"
                      className="button is-success is-small"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  )}

                  {isSelected && (
                    <button
                      type="button"
                      data-cy="RemoveButton"
                      className="button is-info is-small"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
