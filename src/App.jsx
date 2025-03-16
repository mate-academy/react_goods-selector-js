import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import React from 'react';

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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods ? `${selectedGoods} is selected` : 'No goods selected'}
        {selectedGoods && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGoods('')}
          >
          </button>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr key={good} className={good === selectedGoods ? 'has-background-success-light' : ''}>
              <td>
                {good === selectedGoods ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelectedGoods('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGoods(good)}
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

