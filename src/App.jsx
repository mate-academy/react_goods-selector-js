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
  const [selected, setSelected] = useState('Jam');
  const selectGood = good => setSelected(good);

  return (
    <main className="section container">
      {
        selected
          ? (
            <h1 className="title is-flex is-align-items-center">
              { `${selected} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => selectGood('')}
              />
            </h1>
          ) : (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {goods.map(
            good => (
              <tr
                data-cy="Good"
                className={good === selected
                  ? 'has-background-success-light'
                  : ''}
                key={good}
              >
                <td>
                  {
                    selected === good
                      ? (
                        <button
                          onClick={() => selectGood('')}
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => selectGood(good)}
                        >
                          +
                        </button>
                      )
                  }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </main>
  );
};
