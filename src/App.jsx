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
  const [goodName, setGoodName] = useState('Jam');

  const reset = () => {
    setGoodName(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!goodName ? 'No goods selected' : `${goodName} is selected`}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={reset}
        />
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === goodName ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={good === goodName ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === goodName ? 'button is-info' : 'button'}
                  onClick={() => {
                    setGoodName(good);
                  }}
                >
                  {good === goodName ? '-' : '+'}
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
