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

  function handleSetSelectedProduct(value) {
    return () => setSelectedProduct(value);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedProduct
          ? (
            <>
              {`${selectedProduct} is selected`}
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleSetSelectedProduct('')}
              />
            </>
          )
          : `No goods selected`}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': selectedProduct === good,
              })}
            >
              <td>
                {selectedProduct === good ? (
                  <button
                    onClick={handleSetSelectedProduct('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={handleSetSelectedProduct(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>

                )}
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
