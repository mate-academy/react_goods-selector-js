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

  const handleButton = () => {
    setSelectedGood(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
        !selectedGood
          ? 'No goods selected'
          : `${selectedGood} is selected`
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleButton}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selectedGood
                  ? 'has-background-success-light'
                  : null
              }
            >
              <td>
                {selectedGood !== good ? (
                  <button
                    onClick={() => {
                      setSelectedGood(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={handleButton}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                )
                }
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
