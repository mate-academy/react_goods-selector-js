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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood && `${selectedGood} is selected`}
        {selectedGood ? (
          <button
            onClick={reset}
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
          {goods.map((good, index) => {
            return (
              <tr
                /* eslint-disable-next-line react/no-array-index-key */
                key={index}
                data-cy="Good"
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {selectedGood !== good ? (
                    <button
                      onClick={() => setSelectedGood(good)}
                      data-cy="AddButton"
                      type="button"
                      className={`button ${good === selectedGood ? 'has-background-success-light' : ''}`}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={reset}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  )}
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
