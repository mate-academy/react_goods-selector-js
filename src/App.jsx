import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

export default function App() {
  const [selectedItem, setSelectedItem] = useState('Jam');

  function pick() {
    setSelectedItem('');
  }

  return (
    <main className="section container">
      {selectedItem ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedItem} is selected`}
          <button
            onClick={pick}
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
        {goods.map((good) => {
          const isItemSelected = selectedItem === good;

          return (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': isItemSelected,
              })}
            >
              <td>
                {isItemSelected ? (
                  <button
                    onClick={pick}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedItem(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}
