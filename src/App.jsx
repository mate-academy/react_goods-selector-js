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

const DEFAULT_SELECTED_GOOD = 'Jam';
const NO_GOOD_SELECTOR = 'No goods selected';
const IS_SELECT = 'is selected';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_SELECTED_GOOD);

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood
            ? `${selectedGood} ${IS_SELECT}`
            : NO_GOOD_SELECTOR
          }

          {!!selectedGood && (
            <button
              onClick={() => setSelectedGood('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )}
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {NO_GOOD_SELECTOR}
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(goodItem => (
            <tr
              key={goodItem}
              data-cy="Good"
              className={
                selectedGood === goodItem
                  ? 'has-background-success-light'
                  : null
              }
            >
              <td>
                {selectedGood === goodItem ? (
                  <button
                    onClick={() => setSelectedGood('')}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGood(goodItem)}
                    data-cy="AddButton"
                    type="button"
                    className="button is-normal is-success"
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {goodItem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
