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

  const selectGood = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      {!selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              onClick={() => selectGood('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={`${selectedGood === good
                ? 'has-background-success-light'
                : ''}`}
            >
              <td>
                {selectedGood !== good
                  ? (
                    <button
                      onClick={() => selectGood(good)}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={() => selectGood('')}
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
