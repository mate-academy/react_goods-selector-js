import 'bulma/css/bulma.css';
import './App.scss';
import {useState } from 'react';

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
        {product === '' ? 'No goods selected' : `${product} is selected`}
        {product !== '' ? (<button onClick={() => setProduct('')} data-cy="ClearButton" type="button" className="delete ml-3" />) : ''}
      </h1>
      <table className="table">
        <tbody>
          {goods.map((p) => (
            <tr key={p} data-cy="Good" className={product === p ? 'has-background-success-light' : ''}>
              <td>
                {product === p?'':(
                  <button
                    onClick={() => setProduct(p)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">{p}</td>
              <td>
                {product === p && (
                  <button
                    onClick={() => setProduct('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </main>
  )
};
