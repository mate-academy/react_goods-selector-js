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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          selectedGood.length > 0
            ? `${selectedGood} is selected`
            : 'No goods selected'
        }

        {selectedGood.length > 0 && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={
              () => setGood('')
            }
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            good === selectedGood
              ? (
                <tr
                  data-cy="Good"
                  key={good}
                  className="has-background-success-light"
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => (setGood(''))}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              ) : (
                <tr
                  data-cy="Good"
                  key={good}
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => (setGood(good))}
                    >
                      +
                    </button>
                  </td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
          ))}
        </tbody>
      </table>
    </main>
  );
};
