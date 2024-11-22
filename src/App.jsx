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
  const [good, selectedGood] = useState('Jam');

  return (
    <div className="App">
      <main className="section container">
        {good ? (
          <h1 className="title is-flex is-align-items-center">
            {good} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                selectedGood('');
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
            {goods.map(goodOfGoods => (
              <tr
                data-cy="Good"
                key={goodOfGoods}
                className={
                  goodOfGoods === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {good !== goodOfGoods ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        selectedGood(goodOfGoods);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => selectedGood('')}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodOfGoods}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};
