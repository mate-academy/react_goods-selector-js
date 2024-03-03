import React, { useState } from 'react';
import classNames from 'classnames';
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
  const [selectedGoods, setSelectedGoods] = useState('Jam');
  const goodsHandler = good => setSelectedGoods(good);

  const showSelected = () =>
    selectedGoods.endsWith('s')
      ? `${selectedGoods} are selected`
      : `${selectedGoods} is selected`;

  return (
    <main className="section container">
      {selectedGoods ? (
        <h1 className="title is-flex is-align-items-center">
          {showSelected()}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => goodsHandler('')}
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === selectedGoods,
              })}
            >
              <td>
                {good === selectedGoods ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => goodsHandler('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => goodsHandler(good)}
                  >
                    +
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
