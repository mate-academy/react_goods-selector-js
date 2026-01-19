import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import cn from 'classnames';

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

  return (
    <main className="section container">
      <h1 className="goodsTitle title is-flex is-align-items-center">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        <br />
        {selectedGood !== '' && (
          <button
            onClick={() => setSelectedGoods('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    onClick={() => setSelectedGoods(good)}
                    data-cy="AddButton"
                    type="button"
                    className={cn({
                      button: true,
                      'is-info': selectedGood === good,
                    })}
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGoods('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
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
