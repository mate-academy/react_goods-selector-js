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
  const [activeGood, setActiveGood] = useState('Jam');

  const handleClick = good => {
    setActiveGood(prev => (prev === good ? null : good));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {activeGood ? `${activeGood} is selected` : 'No goods selected'}
        {activeGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setActiveGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = activeGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={`${isActive ? 'has-background-success-light' : ''}`}
              >
                <td>
                  <button
                    onClick={() => handleClick(good)}
                    data-cy={`${isActive ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${isActive ? 'is-info' : ''}`}
                  >
                    {`${isActive ? '-' : '+'}`}
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
