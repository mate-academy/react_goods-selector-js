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
  const [goodSelector, setGoodSelector] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelector ? `${goodSelector} is selected` : `No goods selected`}
        {goodSelector && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGoodSelector('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === goodSelector ? 'has-background-success-light' : ''
              }
            >
              {good === goodSelector ? (
                <td>
                  <button
                    onClick={() => {
                      setGoodSelector('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    onClick={() => {
                      setGoodSelector(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                </td>
              )}

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
