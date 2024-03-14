import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

const goods = [
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
  const [name, setName] = useState(goods[8]);

  return (
    <main className="section container">
      {name ? (
        <h1 className="title is-flex is-align-items-center">
          {name} is selected
          <button
            onClick={() => setName('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((product, index) => {
            const isChosen = name === product;
            const keyNumber = index + 1;

            return (
              <tr
                data-cy="Good"
                key={keyNumber}
                className={`${isChosen ? 'has-background-success-light' : ''}`}
              >
                <td>
                  <button
                    onClick={() => setName(isChosen ? '' : product)}
                    data-cy={isChosen ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isChosen ? 'button is-info' : 'button'}
                  >
                    {isChosen ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {product}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
