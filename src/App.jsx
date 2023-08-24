import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';
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
  const DEFAULT_PRODUCT = 'Jam';
  const [selectedProduct, setSelectedProduct] = useState(DEFAULT_PRODUCT);
  const goodsWithId = goods.reduce((goodsList, product, index) => {
    goodsList.push({
      product,
      id: index + 1,
    });

    return goodsList;
  }, []);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedProduct
          ? `${selectedProduct} is selected`
          : 'No goods selected'
        }

        {selectedProduct && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedProduct('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsWithId.map(({ product, id }) => (
            <tr
              data-cy="Good"
              key={id}
              className={cn({
                'has-background-success-light': selectedProduct === product,
              })}
            >
              <td>
                {selectedProduct === product
                  ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedProduct(null)}
                    >
                      -
                    </button>
                  )
                  : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedProduct(product)}
                    >
                      +
                    </button>
                  )
                }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
