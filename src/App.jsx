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
  const [selectedGood, setGood] = useState('Jam');
  const reset = () => { // variable with a function for resets
    setGood('');
  };

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center" // H1 is now outside ternary
      >
        {(selectedGood === '')
          ? (
            'No goods selected'
          )
          : (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={reset} // now a function
              />
            </>
          )}
      </h1>

      <table className="table">
        <tbody>

          {goods.map(good => ( // Key added to the relevant tag
            <tr
              data-cy="Good"
              className={selectedGood === good
                && 'has-background-success-light'}
              key={good}
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${selectedGood === good ? 'is-info' : ''}`}
                  onClick={() => setGood(selectedGood === good ? '' : good)}
                >
                  {selectedGood === good ? `-` : `+`}
                </button>
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
