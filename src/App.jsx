import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import React from 'react';
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
  const [selectedGood, setGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="goodsTitle title is-flex is-align-items-center">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        <br />
        {selectedGood !== '' && (
          <button
            onClick={() => setGoods('')}
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
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    onClick={() => setGoods(good)}
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
                    onClick={() => setGoods('')}
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
