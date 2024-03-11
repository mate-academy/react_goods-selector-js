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
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}
        {good && (
          <button
            data-cy="ClearButton"
            type="button"
            onClick={() => setGood('')}
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => {
            const isActive = good === item;

            return (
              <tr
                key={item}
                data-cy="Good"
                className={isActive ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isActive ? 'button is-info' : 'button'}
                    onClick={() => setGood(isActive ? '' : item)}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
