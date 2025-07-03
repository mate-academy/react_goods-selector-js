import React, { useState } from 'react';

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
  const [selectedGood, setSelectedGood] = useState(null);

  const selectGood = good => {
    setSelectedGood(good);
  };

  const removeSelection = () => {
    setSelectedGood(null);
  };

  return (
    <div className="container">
      <h1 className="title">Goods</h1>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            <span data-cy="GoodTitle">{good}</span>

            {selectedGood !== good && (
              <button
                data-cy="AddButton"
                type="button"
                className="is-success"
                onClick={() => selectGood(good)}
              >
                +
              </button>
            )}

            {selectedGood === good && (
              <button
                data-cy="RemoveButton"
                type="button"
                className="is-info"
                onClick={removeSelection}
              >
                -
              </button>
            )}
          </li>
        ))}
      </ul>

      {selectedGood && (
        <p className="has-text-weight-bold">Selected good: {selectedGood}</p>
      )}
    </div>
  );
};
