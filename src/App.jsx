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
  const [currentGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!currentGood ? 'No goods selected' : `${currentGood} is selected`}
        {currentGood && (
          <button
            onClick={() => {
              setGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const handleClick = () => {
              setGood(currentGood === good ? '' : good);
            };

            return (
              <tr
                className={
                  currentGood === good ? 'has-background-success-light' : ''
                }
                data-cy="Good"
                key={good}
              >
                <td>
                  <button
                    type="button"
                    className={`button ${currentGood === good && 'is-info'}`}
                    data-cy={`${currentGood === good ? 'RemoveButton' : 'AddButton'}`}
                    onClick={handleClick}
                  >
                    {currentGood === good ? '-' : '+'}
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
};
