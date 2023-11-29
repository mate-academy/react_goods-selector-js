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

  const clearButton = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => clearButton()}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>

          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  data-cy={(selectedGood !== good)
                    ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={selectedGood === good
                    ? 'button is-info' : 'button'}
                  onClick={() => {
                    if (selectedGood !== good) {
                      setSelectedGood(good);
                    } else {
                      clearButton();
                    }
                  }}

                >
                  {selectedGood !== good ? '+' : '-'}
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
