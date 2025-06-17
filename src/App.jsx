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
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood ? (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodName => {
            if (goodName === selectedGood) {
              return (
                <tr data-cy="Good" className="has-background-success-light">
                  <td>
                    <button
                      onClick={() => setSelectedGood('')}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {selectedGood}
                  </td>
                </tr>
              );
            }

            return (
              <tr data-cy="Good">
                <td>
                  <button
                    onClick={() => setSelectedGood(goodName)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
