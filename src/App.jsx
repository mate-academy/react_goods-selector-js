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

  const toggleSelected = good => {
    setSelectedProduct(good === selectedProduct ? '' : good);
  };

  return (
    <main className="section container">
      {selectedProduct === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedProduct} is selected
          {/* eslint-disable-next-line max-len */}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedProduct('');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({
                'has-background-success-light': selectedProduct === good,
              })}
              key={good}
            >
              <td>
                <button
                  data-cy={
                    selectedProduct === good ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={classNames('button', {
                    'is-info': selectedProduct === good,
                  })}
                  onClick={() => toggleSelected(good)}
                >
                  {selectedProduct === good ? '-' : '+'}
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
