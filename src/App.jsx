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
  'Honey',
  'Fish',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const clearSelection = () => {
    setSelectedGood('');
  };

  const ClearButton = selectedGood ? (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={clearSelection}
    />
  ) : null;

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          {ClearButton}
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table is-fullwidth">
        <tbody>
          {goods.map(
            good =>
              good === selectedGood ? (
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
                      onClick={clearSelection}
                    >
                      -
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                <tr key={good} data-cy="Good">
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ),
            // eslint-disable-next-line function-paren-newline
          )}
        </tbody>
      </table>
    </main>
  );
};
