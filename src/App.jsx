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

  const hangeResetGood = () => setGood('');

  return (
    <main className="section container">
      {!good ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${good} is selected`}
          <button
            onClick={hangeResetGood}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((go) => {
            const isGoodSelected = go === good;

            return (
              <tr
                key={go}
                data-cy="Good"
                className={isGoodSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isGoodSelected ? (
                    <button
                      onClick={hangeResetGood}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => setGood(go)}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      aria-label="Select a good option"
                    >
                      +
                    </button>
                  )}
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {go}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
