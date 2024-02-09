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
  const reset = () => {
    setSelectedGood('');
  };

  const valueSelected = selectedGood ? `${selectedGood} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {valueSelected}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}

      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected && 'has-background-success-light'}
              >
                <td>
                  {isSelected
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={reset}
                      >
                        -
                      </button>
                    ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    )
                  }
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
