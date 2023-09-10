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
  const [selectedGood, setselectedGood] = useState('Jam');
  const [message, setMessage] = useState(`${selectedGood} is selected`);

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {message}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setselectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>

          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
              onClick={() => {
                setselectedGood(good);
                setMessage(`${good} is selected`);
              }}
              key={good}
            >

              <td>
                {selectedGood !== good ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
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
