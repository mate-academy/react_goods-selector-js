import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

  const handleAdd = (good) => {
    setSelectedGood(good === selectedGood ? '' : good);
  };

  const handleRemove = () => {
    setSelectedGood('');
  };

  const isGoodSelected = good => selectedGood === good;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleRemove}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={isGoodSelected(good)
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  data-cy={isGoodSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button${isGoodSelected(good) ? ' is-info' : ''}`}
                  onClick={() => handleAdd(good)}
                >
                  {isGoodSelected(good) ? '-' : '+'}
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
