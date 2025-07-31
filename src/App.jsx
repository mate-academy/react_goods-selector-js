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
  const [selectedGood, setSelectedGoods] = useState('Jam');
  const addHandler = name => {
    setSelectedGoods(name);
  };

  const clearHandler = () => {
    setSelectedGoods('');
  };

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearHandler}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(e => (
            <tr
              data-cy="Good"
              className={
                selectedGood === e ? 'has-background-success-light' : null
              }
            >
              <td>
                {selectedGood === e ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearHandler}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => addHandler(e)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {e}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
