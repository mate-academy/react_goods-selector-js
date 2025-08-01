import 'bulma/css/bulma.css';
import { useState } from 'react';
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
          {goods.map(any => (
            <tr
              data-cy="Good"
              className={
                selectedGood === any ? 'has-background-success-light' : null
              }
            >
              <td>
                {selectedGood === any ? (
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
                    onClick={() => addHandler(any)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {any}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
