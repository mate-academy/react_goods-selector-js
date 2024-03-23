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
  const [selectedGood, changeSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood !== 'none' ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            onClick={() => changeSelectedGood('none')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood && 'has-background-success-light'
              }
            >
              <td>
                {good === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => changeSelectedGood('none')}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => changeSelectedGood(good)}
                  >
                    +
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
    </main>
  );
};
