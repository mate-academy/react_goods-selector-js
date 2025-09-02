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

  const handleSelectGood = good => {
    if (selectedGood === good) {
      setSelectedGood("");
    } else {
      setSelectedGood(good);
    }
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
            onClick={() => setSelectedGood("")}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(n => {
            const isSelected = selectedGood === n;

            return (
              <tr
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
                key={n}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'}
                    key={n}
                    onClick={() => handleSelectGood(n)}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {n}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
