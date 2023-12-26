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

export function App() {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isActive = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isActive ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    onClick={() => (isActive
                      ? setSelectedGood('')
                      : setSelectedGood(good)
                    )}
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isActive ? 'button is-info' : 'button'}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>
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
}
