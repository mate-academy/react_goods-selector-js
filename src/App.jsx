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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product ? `${product} is selected` : 'No goods selected'}

        {product && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setProduct('')}
        />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={`${product === good ? 'has-background-success-light' : ''}`}
            >
              <td>
                <button
                  data-cy={product === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${product === good ? 'is-info' : ''}`}
                  onClick={product === good ? () => {
                    setProduct('');
                  } : () => {
                    setProduct(good);
                  }}
                >
                  {product === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
