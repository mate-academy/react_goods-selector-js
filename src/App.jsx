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
  const [selectedProduct, setSelectedProduct] = useState('Jam');

  const isSelected = product => product === selectedProduct;

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
            return (
              <tr
                data-cy="Good"
                className={
                  isSelected(product) ? 'has-background-success-light' : ''
                }
                key={product}
              >
                <td>
                  <button
                    data-cy={isSelected(product) ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`${isSelected(product) ? 'button is-info' : 'button'}`}
                    onClick={() => {
                      if (isSelected(product)) {
                        setSelectedProduct('');

                        return;
                      }

                      setSelectedProduct(product);
                    }}
                  >
                    {isSelected(product) ? '-' : '+'}
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
