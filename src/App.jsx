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

export default function App() {
  const jam = goods.find(e => e === 'Jam');
  const [item, setItem] = useState(jam);

  function itemPick(elem) {
    setItem(elem);
  }

  function itemClear() {
    setItem('');
  }

  return (
    <main className="section container">
      {item === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${item} is selected`}
          <button
            onClick={() => itemClear()}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        {goods.map(elem => (
          <tr
            key={elem}
            data-cy="Good"
            className={item === elem ? 'has-background-success-light' : ''}
          >
            <td>
              {item === elem ? (
                <button
                  onClick={() => itemClear()}
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => itemPick(elem)}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  +
                </button>
              )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {elem}
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}
