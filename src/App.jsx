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
  const [selectedProducts, setProduct] = useState('Jam');

  const handleChosenProduct = product => {
    setProduct(chosenProduct => (chosenProduct === product ? '' : product));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedProducts
          ? `${selectedProducts} is selected`
          : 'No goods selected'}

        {selectedProducts && (
          <button
            onClick={() => setProduct('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => {
            const isSelected = selectedProducts === product;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  <button
                    onClick={() => handleChosenProduct(product)}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                  >
                    {isSelected ? '-' : '+'}
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
