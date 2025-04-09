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
  // Зберігаємо вибраний товар у стані (початкове значення - "Jam")
  const [selectedGood, setSelectedGood] = useState('Jam');

  // Функція для вибору товару
  const selectGood = goodName => {
    setSelectedGood(goodName);
  };

  // Функція для очищення вибору
  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {/* Таблиця товарів */}
      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              key={goodName}
              data-cy="Good"
              className={
                selectedGood === goodName ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood === goodName ? (
                  // Кнопка видалення для вибраного товару
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearSelection}
                  >
                    -
                  </button>
                ) : (
                  // Кнопка додавання для невибраних товарів
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => selectGood(goodName)}
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
