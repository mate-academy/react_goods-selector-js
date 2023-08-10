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
  const [selectedGood, setGood] = useState('Jam');
  const handleClick = good => setGood(good);
  const resetClick = () => setGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetClick}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((product) => {
            const isSelected = selectedGood === product;

            return (
              <tr
                data-cy="Good"
                key={product}
                className={isSelected && 'has-background-success-light'}
              >
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={resetClick}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleClick(product)}
                    >
                      +
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
