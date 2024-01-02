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
        {!good ? (
          'No goods selected'
        ) : (
          <>
            {`${good} is selected`}

            <button
              onClick={() => setGood('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodForTr => (
            <tr data-cy="Good" className={`${goodForTr}` === `${good}` && 'has-background-success-light'}>
              <td>
                {`${goodForTr}` !== `${good}` ? (
                  <button
                    onClick={() => setGood(`${goodForTr}`)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={() => setGood('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodForTr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
