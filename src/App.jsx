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

  const handleClearSelection = good => {
    setSelectedGood(good);
  };

  const handleSelectGood = good => {
    setSelectedGood(good);
  };

  const handleRemoveSelection = good => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleClearSelection('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
              data-cy="Good"
            >
              <td>
                {good !== selectedGood && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleSelectGood(good)}
                  >
                    +
                  </button>
                )}
                {good === selectedGood && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleRemoveSelection('')}
                  >
                    -
                  </button>
                )}
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
