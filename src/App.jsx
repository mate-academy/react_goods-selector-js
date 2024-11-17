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
  const [isSelectedGood, setIsSelectedGood] = useState('Jam');

  const handleClear = () => setIsSelectedGood('');
  const handleSelect = good => {
    setIsSelectedGood(prev => (prev === good ? '' : good));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelectedGood ? `${isSelectedGood} is selected` : 'No goods selected'}

        {isSelectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = isSelectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    type="button"
                    className={`button ${isSelected ? 'is-info' : ''}`}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    onClick={() => handleSelect(good)}
                  >
                    {isSelected ? '-' : '+'}
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
