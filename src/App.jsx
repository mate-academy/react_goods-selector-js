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
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood !== '' && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selectedGood
                  ? 'has-background-success-light'
                  : undefined
              }
            >
              <td>
                {selectedGood === '' && (
                  <button
                    data-cy="AddButton"
                    onClick={() => setSelectedGood(good)}
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
                {good === selectedGood && (
                  <button
                    data-cy="RemoveButton"
                    onClick={() => setSelectedGood('')}
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
)}
              </td>

              <td data-cy="GoodTitle">{good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
