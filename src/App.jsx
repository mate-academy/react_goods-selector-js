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
  const [product, setProduct] = useState('Jam');

  const handleProductSelection = (e) => {
    setProduct(e);
  };

  const clearAllGoods = () => {
    setProduct('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product ? `${product} is selected` : 'No goods selected'}
        {product && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearAllGoods}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((item) => (
            <tr
              data-cy="Good"
              key={item}
              className={product === item ? 'has-background-success-light' : ''}
            >
              {item === product ? (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearAllGoods}
                  >
                    -
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleProductSelection(item)}
                  >
                    +
                  </button>
                </td>
              )}

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
