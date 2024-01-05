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

  function reset() {
    setGood('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}

        {good ? (
          <button
            onClick={reset}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : ''}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              className={cn({
                'has-background-success-light': good === item,
              })}
              data-cy="Good"
              key={item}
            >
              <td>
                {good === item ? (
                  <button
                    onClick={() => {
                      setGood('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setGood(item)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
