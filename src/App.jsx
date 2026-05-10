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
// Масив товарів, які будуть відображатися в таблиці

export const App = () => {
  // Створюємо стан selectedGood. Початкове значення за умовою — 'Jam'
  // setSelectedGood — функція, яка дозволяє нам змінювати цей стан
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {/* Заголовок із використанням Flexbox від Bulma для вирівнювання елементів */}
      <h1 className="title is-flex is-align-items-center">
        {/* Якщо selectedGood порожній (false), показуємо текст "No goods selected",
            інакше показуємо назву вибраного товару */}
        {!selectedGood ? 'No goods selected' : `${selectedGood} is selected`}

        {/* Логічне "І" (&&): кнопка ClearButton з'явиться в DOM лише тоді, коли selectedGood не порожній */}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3" // Клас Bulma для маленької кнопки-хрестика
            onClick={() => setSelectedGood('')} // При кліку встановлюємо стан у порожній рядок
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {/* Перебираємо масив goods за допомогою .map(), щоб створити рядок для кожного товару */}
          {goods.map(good => (
            <tr
              key={good} // React потребує унікальний key для кожного елемента списку (назва товару тут унікальна)
              data-cy="Good"
              // Динамічний клас: якщо назва товару збігається з вибраною, додаємо підсвічування фону
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td className="is-vcentered">
                {/* Якщо товар вибрано, показуємо кнопку "мінус", інакше — "плюс" */}
                {good === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGood('')} // Очищаємо стан при натисканні на "-"
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(good)} // Встановлюємо цей товар як вибраний при натисканні на "+"
                  >
                    +
                  </button>
                )}
              </td>

              {/* Комірка з назвою товару */}
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
