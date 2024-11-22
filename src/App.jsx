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
  const [goodText, setGoodText] = useState('Jam');

  function clearGood() {
    setGoodText('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodText.length ? `${goodText} is selected` : 'No goods selected'}
        {goodText && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                goodText === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                {goodText === good ? (
                  <button
                    data-cy={goodText === good ? `RemoveButton` : `AddButton`}
                    type="button"
                    className="button is-info"
                    onClick={clearGood}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy={goodText === good ? `AddButton` : `AddButton`}
                    type="button"
                    className="button"
                    onClick={() => setGoodText(good)}
                  >
                    +
                  </button>
                )}
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
