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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {/* Тільки текст */}
        <span data-cy="SelectedGood">
          {selectedGood === ''
            ? 'No goods selected'
            : `${selectedGood} is selected`}
        </span>

        {/* Кнопка Clear */}
        {selectedGood !== '' && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            let button = null;

            if (good === selectedGood) {
              // Вибраний товар → RemoveButton
              button = (
                <button
                  onClick={() => setSelectedGood('')}
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              );
            } else if (selectedGood === '') {
              // Нічого не вибрано → AddButton для всіх
              button = (
                <button
                  onClick={() => setSelectedGood(good)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              );
            }
            // Інакше (товар не вибрано і вже є вибраний товар) → button = null

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
