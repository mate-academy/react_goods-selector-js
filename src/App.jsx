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

  const addGood = (good) => {
    setSelectedGood(good);
  };

  const removeGood = (good) => {
    setSelectedGood('');
  };

  const clearBtn = selectedGood && (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={removeGood}
    />
  );

  const goodTitle = selectedGood ? (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      {clearBtn}
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  return (
    <main className="section container">
      { goodTitle }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''
              }
            >
              {selectedGood !== good ? (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => addGood(good)}
                  >
                    +
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={removeGood}
                  >
                    -
                  </button>
                </td>
              )}
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
