import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setSelected] = useState('Jam');
  const handleClear = () => {
    setSelected('');
  };

  const handleSelect = good => {
    setSelected(good);
  };

  const handleRemove = () => {
    setSelected('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            onClick={handleClear}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
             <td>
  {selectedGood === '' && (
    <button
      onClick={() => handleSelect(good)}
      data-cy="AddButton"
      type="button"
      className="button"
    >
      +
    </button>
  )}
    {selectedGood === good && (
      <button
        onClick={handleRemove}
        data-cy="RemoveButton"
        type="button"
        className="button is-info"
      >
        -
      </button>
    )}

    {selectedGood !== '' && good !== selectedGood && (
       <button
      onClick={() => handleSelect(good)}
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
