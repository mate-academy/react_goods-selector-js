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

  const isSelected = good => selectedGood === good;

  const handleAddGood = (good) => {
    setSelectedGood(good);
  };

  const handleRemoveGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleRemoveGood()}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods?.map(good => (
            <tr
              data-cy="Good"
              className={isSelected(good) ? 'has-background-success-light' : ''}
              key={good}
            >
              <td>
                {!isSelected(good) ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleAddGood(good)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => handleRemoveGood()}
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
