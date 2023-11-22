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

const h1Classes = 'title is-flex is-align-items-center';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className={h1Classes} id="selectGoodsId">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        </h1>
      ) : (
        <h1 className={h1Classes}>
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((product) => {
            const isSelectedProduct = product === selectedGood;

            return (
              <tr
                key={product}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelectedProduct,
                })}
              >
                <td>
                  {!isSelectedProduct ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setSelectedGood(product);
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
                        setSelectedGood('');
                      }}
                    >
                      -
                    </button>
                  )}
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
