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
  const [changed, setChanged] = useState('Jam');

  function handleClearButton(good) {
    setChanged(good === changed ? '' : good);
  }

  return (
    <main className="section container">
      {(!changed && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )) || (
        <h1 className="title is-flex is-align-items-center">
          {changed} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setChanged('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(e => (
            <tr
              data-cy="Good"
              key={e}
              className={changed === e ? 'has-background-success-light' : ''}
            >
              <td>
                {' '}
                {changed === e ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleClearButton(e)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-link"
                    onClick={() => handleClearButton(e)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {e}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
