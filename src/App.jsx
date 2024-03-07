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

const DEFAULT_GOOD = goods.find(good => good === 'Jam');

export const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1
        className={classNames('title', {
          'is-flex is-align-items-center': selectedProduct,
        })}
      >
        {selectedProduct
          ? `${selectedProduct} is selected`
          : 'No goods selected'}
        {selectedProduct && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedProduct('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isChosenProduct = currentGood =>
              currentGood === selectedProduct;

            const isSelected = isChosenProduct(good);

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={`${isSelected ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => {
                      isSelected
                        ? setSelectedProduct('')
                        : setSelectedProduct(good);
                    }}
                  >
                    {isSelected ? '-' : '+'}
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
