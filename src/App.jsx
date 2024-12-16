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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            onClick={() => setGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
              data-cy="Good"
            >
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
              <td>
                {(!selectedGood || selectedGood !== good) && (
                  <button
                    onClick={() => setGood(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button is-primary"
                  >
                    +
                  </button>
                )}
                {selectedGood === good && (
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
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
