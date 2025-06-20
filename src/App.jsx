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
  const [sel, setSel] = useState('Jam');

  return (
    <main className="section container">
      {sel ? (
        <h1 className="title is-flex is-align-items-center">
          {sel} is selected
          <button
            onClick={() => setSel(null)}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {[...goods].map(good => (
            <tr
              key={good}
              className={good === sel ? 'has-background-success-light' : ''}
              data-cy="Good"
            >
              <td>
                <button
                  onClick={() => setSel(good === sel ? null : good)}
                  data-cy={good === sel ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === sel ? 'button is-info' : 'button'}
                >
                  {good === sel ? '-' : '+'}
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
