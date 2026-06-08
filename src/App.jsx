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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? (
          <>
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGood('')}
            />
          </>
        ) : (
          `No goods selected`
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(g => {
            return (
              <tr
                key={g}
                data-cy="Good"
                className={g === good ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={g === good ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${g === good ? 'is-info' : ''}`}
                    onClick={() => setGood(g === good ? '' : g)}
                  >
                    {g === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {g}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
