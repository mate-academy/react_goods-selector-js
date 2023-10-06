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
  const handleResetGood = () => setSelectedGood('');

  return (
    <main className="section container">
      {
        selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={handleResetGood}
              />
            </h1>
          )
          : (
            <h1 className="title">No goods selected</h1>
          )

      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const handleSetGood = () => setSelectedGood(good);

            return (
              selectedGood !== good
                ? (
                  <tr key={good} data-cy="Good">
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={handleSetGood}
                      >
                        +
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
                : (
                  <tr
                    key={good}
                    data-cy="Good"
                    className="has-background-success-light"
                  >
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={handleResetGood}
                      >
                        -
                      </button>
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
