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
  const [goodSelected, setGoodSelected] = useState('Jam');
  const reset = () => setGoodSelected('');

  return (
    <main className="section container">
      {goodSelected === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {goodSelected} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === goodSelected;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  {isGoodSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      onClick={reset}
                      className={classNames('button', {
                        'is-info': isGoodSelected,
                      })}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      onClick={() => setGoodSelected(good)}
                      className={classNames('button', {
                        'is-info': isGoodSelected,
                      })}
                    >
                      +
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
