import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import clsx from 'clsx';

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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const clearGoodSelection = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => clearGoodSelection()}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              data-cy="Good"
              className={clsx({
                'has-background-success-light': product === selectedGood,
              })}
              key={product}
            >
              <td>
                {product !== selectedGood ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(product)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => clearGoodSelection()}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
