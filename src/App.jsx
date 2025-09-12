import React, { useState } from 'react';
import 'bulma/css/bulma.css';

const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const goods = [
    { name: 'Dumplings' },
    { name: 'Carrot' },
    { name: 'Eggs' },
    { name: 'Ice cream' },
    { name: 'Apple' },
    { name: 'Bread' },
    { name: 'Fish' },
    { name: 'Honey' },
    { name: 'Jam' },
    { name: 'Garlic' },
  ];

  const handleAdd = name => {
    setSelectedGood(name);
  };

  const handleRemove = () => {
    setSelectedGood('');
  };

  const handleClear = () => {
    setSelectedGood('');
  };

  const isGoodSelected = selectedGood !== '';

  return (
    <div>
      <h1 className="title">
        {isGoodSelected ? `${selectedGood} is selected` : 'No goods selected'}
        {isGoodSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            aria-label="x"
            onClick={handleClear}
          />
        )}
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th>Good</th>
            <th>Add</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {goods.map(good => (
            <tr
              key={good.name}
              data-cy="Good"
              className={
                selectedGood === good.name ? 'has-background-success-light' : ''
              }
            >
              <td>
                <span data-cy="GoodTitle">{good.name}</span>
              </td>
              <td>
                {!isGoodSelected && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    onClick={() => handleAdd(good.name)}
                  >
                    +
                  </button>
                )}
              </td>
              <td>
                {isGoodSelected && selectedGood === good.name && (
                  <button
                    data-cy="RemoveButton"
                    className="button is-info"
                    type="button"
                    onClick={handleRemove}
                  >
                    -
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
