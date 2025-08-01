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
      {good ? (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(el => (
            <tr
              data-cy="Good"
              key={el}
              className={good === el ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={good === el ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${good === el ? 'is-info' : ''}`}
                  onClick={el === good ? () => setGood('') : () => setGood(el)}
                >
                  {el === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {el}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
