import { useState } from 'react';
import 'bulma/css/bulma.css';

const goods = [
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
  const isSelected = selectedGood !== '';

  return (
    <main>
      <h1 className="title">
        {isSelected ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete"
              onClick={() => setSelectedGood('')}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table>
        <tbody>
          {goods.map(good => {
            const isThisSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isThisSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {!isThisSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  )}

                  {isThisSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle">{good}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
