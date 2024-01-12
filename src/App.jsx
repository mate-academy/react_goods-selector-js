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
  const [state, selectedGood] = useState('Jam');

  const stateOfGood = (good) => {
    const st = state === good ? selectedGood('') : selectedGood(good);

    return st;
  };

  return (
    <main className="section container">
      <h1 className={state ? 'title is-flex is-align-items-center' : 'title'}>
        {state ? `${state} is selected` : 'No goods selected'}
        {state && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => (selectedGood(current => ''))}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={good === state ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={good === state ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === state ? 'button is-info' : 'button'}
                  onClick={() => {
                    stateOfGood(good);
                  }}
                >
                  {good === state ? '-' : '+'}
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
