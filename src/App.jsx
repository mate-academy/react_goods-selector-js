import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import className from 'classnames';

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
  const clearSelection = () => setSelectedGood('');
  const handleSelection = (good, isSelected) =>
    isSelected ? clearSelection() : setSelectedGood(good);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={className({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={className({
                      button: true,
                      'is-info': isSelected,
                    })}
                    onClick={() => handleSelection(good, isSelected)}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                  style={{ color: isSelected ? 'black' : 'white' }}
                >
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
