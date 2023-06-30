import { useState } from 'react';
import className from 'classnames';

import 'bulma/css/bulma.css';
import './App.scss';

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

  const correctTitle = selectedProduct
    ? `${selectedProduct} is selected`
    : 'No goods selected';

  const ClearButton = () => (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={() => (setSelectedProduct(''))}
    />
  );

  const clearButtonVisibility = selectedProduct
    ? <ClearButton />
    : '';

  const ProductButton = (productState, product) => (
    <button
      data-cy={productState
        ? 'RemoveButton'
        : 'AddButton'}
      type="button"
      className={className('button', { 'is-info': productState })}
      onClick={() => (
        setSelectedProduct(productState ? '' : product)
      )}
    >
      {productState ? '-' : '+'}
    </button>
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {correctTitle}

        {clearButtonVisibility}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((product) => {
            const isActive = product === selectedProduct;

            return (
              <tr
                key={product}
                data-cy="Good"
                className={
                  className({ 'has-background-success-light': isActive })}
              >
                <td>
                  {ProductButton(isActive, product)}
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
