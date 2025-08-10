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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isGoodSelected = selectedGood !== '';
  const title = isGoodSelected
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  const handleToggleGood = good => {
    setSelectedGood(prev => (prev === good ? '' : good));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}
        {isGoodSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={isActive ? 'has-background-success-light' : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${isActive ? 'is-info' : ''}`}
                    onClick={() => handleToggleGood(good)}
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
};
