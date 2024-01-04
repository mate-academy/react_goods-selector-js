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
  const [selectedProduct, setProduct] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedProduct ? (
          <>
            {`${selectedProduct} is selected`}
            <button
              onClick={() => {
                setProduct('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            selectedProduct === good ? (
              <tr data-cy="Good" className="has-background-success-light">
                <td>
                  <button
                    onClick={() => {
                      setProduct('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ) : (
              <tr data-cy="Good">
                <td>
                  <button
                    onClick={() => {
                      setProduct(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </main>
  );
};
