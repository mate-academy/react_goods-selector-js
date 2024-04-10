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
  const [selected, setSelected] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);

  function handleSelection(product) {
    let select = true;

    if (!product) {
      select = false;
    }

    setSelectProduct(product);
    setSelected(select);
  }

  return (
    <main className="section container">
      {selected ? (
        <h1 className="title is-flex is-align-items-center">
          {selectProduct} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected(false)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          <tr data-cy="Good">
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => handleSelection(goods[0])}
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {goods[0]}
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={() => handleSelection(null)}
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {goods[0]}
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
