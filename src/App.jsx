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
  function resetList(id) {
    const activeElem = document.querySelector('.has-background-success-light');
    const activeBtn = document.querySelector('.is-info');

    setSelectedGood('');

    if (activeElem && activeBtn.id !== id) {
      activeElem.classList.remove('has-background-success-light');
      activeBtn.classList.remove('is-info');
      activeBtn.textContent = '+';
    }
  }

  function clickHandler({ target }) {
    resetList(target.id);
    const btn = target;

    btn.classList.toggle('is-info');
    const parent = target.closest('[data-cy="Good');

    btn.textContent
      = target.textContent === '+' ? '-' : '+';

    parent.classList.toggle('has-background-success-light');
    const elementName = parent.lastChild.textContent;

    if (btn.textContent === '-') {
      setSelectedGood(elementName);
    }
  }

  function createId(i) {
    const random = i + (Math.random() + Date.now()) + (i + 1 - Date.now());

    return Math.trunc(random);
  }

  const [selectedGood, setSelectedGood] = useState('');

  return (
    <main className="section container">
      {selectedGood === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={resetList}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((el, i) => (
            <tr
              data-cy="Good"
              key={createId(i)}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={clickHandler}
                  id={i}
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
