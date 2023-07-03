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
  const clearGood = () => (setSelectedGood(''));
  const selectGood = good => (setSelectedGood(good));

  return (

    <main className="section container">
      {selectedGood.length > 0
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={clearGood}
            />
          </h1>
        )
        : (
          <h1 className="title">No goods selected</h1>)
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood
                && 'has-background-success-light'}
              key={good}
            >
              {good === selectedGood
                ? (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={clearGood}
                    >
                      -
                    </button>
                  </td>
                )
                : (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => selectGood(good)}
                    >
                      +
                    </button>
                  </td>
                )
              }
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
