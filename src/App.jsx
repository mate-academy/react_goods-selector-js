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
  const buttonClear = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood && `${selectedGood} is selected`}
        {selectedGood ? (
          <button
            onClick={buttonClear}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(word => (
            <tr
              data-cy="Good"
              key={word}
              className={
                selectedGood === word && 'has-background-success-light'
              }
            >
              <td>
                {selectedGood !== word ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={`button ${word === selectedGood && 'has-background-success-light'}`}
                    onClick={() => setSelectedGood(word)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={buttonClear}
                  >
                    -
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {word}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
