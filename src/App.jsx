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

  return (
    <div className="App">
      <h1 className="title" data-cy="SelectedGood">
        <span>
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </span>

        {selectedGood && (
          <button
            type="button"
            className="delete ml-3"
            data-cy="ClearButton"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td data-cy="GoodTitle">{good}</td>

                <td>
                  {isSelected ? (
                    <button
                      className="is-info"
                      type="button"
                      data-cy="RemoveButton"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      type="button"
                      data-cy="AddButton"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
