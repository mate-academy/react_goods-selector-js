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
  const [selectedGoodIndex, setSelectedGoodIndex] = useState(8);

  function clearSelection() {
    setSelectedGoodIndex(null);
    setProduct(null);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {product ? `${product} is selected` : 'No goods selected'}
        {product && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              clearSelection();
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            const isSelected = selectedGoodIndex === index;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={
                  (product && isSelected && 'has-background-success-light') ||
                  ''
                }
              >
                <td>
                  {!isSelected ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setProduct(good);
                        setSelectedGoodIndex(index);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        clearSelection();
                      }}
                    >
                      -
                    </button>
                  )}
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
