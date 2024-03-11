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
            const isItem = good === item;

            return (
              <tr
                data-cy="Good"
                className={isItem ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={isItem ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isItem ? 'button is-info' : 'button'}
                    onClick={() => {
                      return isItem ? setGood('') : setGood(item);
                    }}
                  >
                    {isItem ? '-' : '+'}
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
