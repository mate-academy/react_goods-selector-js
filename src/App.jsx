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
  const [selectedProduct, setProduct] = useState('Jam');

  const isSelectedProduct = product => product === selectedProduct;

  return (
    <main className="section container">

      {
        selectedProduct
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedProduct} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setProduct('')}
              />
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              data-cy="Good"
              key={product}
              className={
                cn({
                  'has-background-success-light':
                    isSelectedProduct(product),
                })
              }
            >
              <td>

                <button
                  data-cy={isSelectedProduct(product)
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={cn('button',
                    { 'is-info': isSelectedProduct(product) })}
                  onClick={() => {
                    if (isSelectedProduct(product)) {
                      setProduct('');
                    } else {
                      setProduct(product);
                    }
                  }}
                >
                  {isSelectedProduct(product) ? '-' : '+'}
                </button>
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
