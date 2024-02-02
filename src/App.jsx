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
  const [good, setGood] = useState('Jam');
  const handleOnRemove = () => setGood('');

  return (
    <main className="section container">
      {good.length
        ? (
          <h1 className="title is-flex is-align-items-center">
            {good}
            {' '}
            is selected
            <button
              onClick={handleOnRemove}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
    }

      <table className="table">
        <tbody>

          {goods.map(product => (
            <tr
              key={product}
              data-cy="Good"
              className={good === product
                ? 'has-background-success-light'
                : undefined}
            >
              <td>
                {good === product
                  ? (
                    <button
                      onClick={handleOnRemove}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  )
                  : (

                    <button
                      onClick={() => {
                        setGood(product);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )
                }
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
