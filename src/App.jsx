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
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods ? (
          <>
            {selectedGoods} is selected
            <button
              onClick={() => setSelectedGoods('')}
              data-cy="ClearButton"
              type="button"
              className="delete"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGoods === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGoods === good ? (
                  <button
                    onClick={() => setSelectedGoods('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGoods(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
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
