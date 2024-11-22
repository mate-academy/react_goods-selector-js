import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
      {good === '' ? (
        <h1 className="title">No goods selected</h1>
      ) : (
        <h1 className="title">
          {good} is selected
          <button
            onClick={() => setGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': goodName === good,
              })}
            >
              <td>
                {goodName === good ? (
                  <button
                    onClick={() => {
                      setGood('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setGood(goodName);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
