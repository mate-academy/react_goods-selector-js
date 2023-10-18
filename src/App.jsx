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
      {!selectedGood ? (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      ) : (
        <div>
          <h1 className="title is-flex is-align-items-center">{`${selectedGood} is selected`}</h1>
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </div>
      )}
      <div>
        <table className="table">
          <tbody>
            {goods.map(good => (
              <tr data-cy="Good" key={good}>
                <td>
                  {selectedGood !== good ? (
                    <button
                      onClick={() => setSelectedGood(good)}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedGood('');
                      }}
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
            ))}
          </tbody>

        </table>
      </div>
    </main>
  );
};
