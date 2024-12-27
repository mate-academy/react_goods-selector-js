/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable function-paren-newline */
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
  // const [isButtonShown, setIsButtonShown] = useState(false)

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3 iframe"
            onClick={() => setGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const currentSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={
                  currentSelected ? 'has-background-success-light' : ''
                }
                key={good}
              >
                {currentSelected ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setGood('')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setGood(good)}
                  >
                    +
                  </button>
                )}
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
