import 'bulma/css/bulma.css';
import { useState } from 'react';
import classNames from 'classnames';
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

const products = goods.map((item, index) => ({
  productsId: index,
  productName: item,
}));

export const App = () => {
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('');
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
          {products.map(product => (
            <tr
              data-cy="Good"
              // eslint-disable-next-line react/no-array-index-key
              key={product.productsId}
              className={classNames({
                'has-background-success-light': product.productName === value,
              })}
            >
              {product.productName === value ? (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setValue('');
                    }}
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
                    onClick={() => {
                      setValue(product.productName);
                    }}
                  >
                    +
                  </button>
                </td>
              )}

              <td data-cy="GoodTitle" className="is-vcentered">
                {product.productName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
