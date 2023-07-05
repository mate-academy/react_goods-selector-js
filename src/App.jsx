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
  const [selectGood, setGoods] = useState(goods[8]);

  function handleAddGoog(good) {
    setGoods(good);
  }

  function handleDelGoog() {
    setGoods('');
  }

  return (
    <main className="section container">
      {selectGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              handleAddGoog();
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={selectGood === good && 'has-background-success-light'}
            >
              <td>
                {selectGood !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      handleAddGoog(good);
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
                      handleDelGoog();
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
