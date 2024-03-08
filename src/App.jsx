import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [selectedProduct, setSelectedProduct] = useState('Jam');

  // Variable to store the selected product
  const SELECTED_PRODUCT = selectedProduct;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedProduct
          ? `${selectedProduct} is selected`
          : 'No goods selected'}
        {selectedProduct && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedProduct('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => {
            const productIsSelected = product === SELECTED_PRODUCT;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': productIsSelected,
                })}
                key={product}
              >
                <td>
                  <button
                    data-cy={productIsSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'is-info': productIsSelected,
                    })}
                    onClick={() => {
                      if (productIsSelected) {
                        setSelectedProduct('');
                      } else {
                        setSelectedProduct(product);
                      }
                    }}
                  >
                    {productIsSelected ? '-' : '+'}
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
