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
  const [value, setValue] = useState('Jam');
  const selectGood = good => {
    const goodIndex = goods.findIndex(el => el === good);

    setValue(goods[goodIndex]);
  };

  const clearGood = () => {
    setValue('');
  };

  function getGoods() {
    return goods.map(good => {
      return good !== value ? (
        <tr data-cy="Good">
          <td>
            <button
              onClick={() => {
                selectGood(good);
              }}
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      ) : (
        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              onClick={() => {
                clearGood();
              }}
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            {good}
          </td>
        </tr>
      );
    });
  }

  return (
    <main className="section container">
      {value === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}
          <button
            onClick={() => {
              clearGood();
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>{getGoods()}</tbody>
      </table>
    </main>
  );
};
