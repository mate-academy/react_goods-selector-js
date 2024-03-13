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
  const selected = name.length !== 0;
  const clearSelected = () => setName('');

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          {name} is selected
          <button
            onClick={clearSelected}
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
          {goods.map(product => {
            const chosen = name === product;
            const choiceConfirm = () => {
              setName(product);
            };

            return (
              <tr
                data-cy="Good"
                className={`${chosen ? 'has-background-success-light' : ''}`}
              >
                <td>
                  <button
                    onClick={() => {
                      return chosen ? clearSelected() : choiceConfirm();
                    }}
                    data-cy={chosen ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={chosen ? 'button is-info' : 'button'}
                  >
                    {chosen ? '-' : '+'}
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
