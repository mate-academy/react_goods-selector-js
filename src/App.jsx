import 'bulma/css/bulma.css';
import './App.scss';
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
  // Створюємо стан для вибраного товару, початкове значення - Jam
  const [selectedGood, setSelectedGood] = useState('Jam');

  // Функція для очищення вибору
  const clearSelection = () => setSelectedGood('');

  // Функція для вибору товару
  const handleAdd = good => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>

      {/* Показуємо кнопку Clear тільки якщо товар вибраний */}
      {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={clearSelection}
        >
          Clear
        </button>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
              data-cy="Good"
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleAdd(good)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearSelection}
                  >
                    -
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
