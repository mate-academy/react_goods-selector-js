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
  const [selectedName, setselectedName] = useState('Jam');
  const reset = () => setselectedName('');

  return (
    <main className="section container">
      {selectedName ? (
        <h1 className="title is-flex is-align-items-center">
          <span>{`${selectedName} is selected`}</span>

          <button
            onClick={reset}
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
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedName === good
                ? 'has-background-success-light' : ''}
            >
              <td>
                {selectedName === good
                  ? (
                    <button
                      onClick={reset}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setselectedName(good)}
                    >
                      +
                    </button>

                  ) }
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
