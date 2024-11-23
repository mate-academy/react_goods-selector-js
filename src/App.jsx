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
  const [wasSelected, setWasSelected] = useState(true);

  function clearClass() {
    const allGoods = document.querySelectorAll('[data-cy="Good"]');

    allGoods.forEach(good => {
      good.classList.remove('has-background-success-light');
    });
  }

  return (
    <main className="section container">
      {!wasSelected && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      {wasSelected && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
              setWasSelected(false);
              clearClass();
            }}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(good);
                      setWasSelected(true);
                      clearClass();
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setSelectedGood('');
                      setWasSelected(false);
                      clearClass();
                    }}
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
