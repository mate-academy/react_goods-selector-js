import 'bulma/css/bulma.css';
import { useState } from 'react';
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
  const [product, setProduct] = useState('Jam');

  const resetButton = () => {
    setProduct('');
  };

  return (
    <main className="section container">
      {product ? (
        <h1 className="title is-flex is-align-items-center">
          {product} is selected
          <button
            onClick={resetButton}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === product;

            return (
              <tr
                data-cy="Good"
                className={
                  good === product ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    onClick={() =>
                      isGoodSelected ? setProduct('') : setProduct(good)
                    }
                    data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isGoodSelected ? 'button is-info' : 'button'}`}
                  >
                    {isGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
