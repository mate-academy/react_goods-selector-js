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
  let [selectedItem, setSelectedItem] = useState(goods[8]);

  const toggleItem = item => {
    setSelectedItem(prev => (prev === item ? null : item));
  };

  return (
    <main className="section container">
      {selectedItem === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedItem} is selected
          <button
            onClick={(() => setSelectedItem(null))}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" key={good} className={selectedItem === good ? "has-background-success-light" : ""}>
              <td>
                <button
                  data-cy={selectedItem === good ? "RemoveButton" : "AddButton"}
                  type="button"
                  className={selectedItem === good ? "button is-info" : "button"}
                  onClick={() => toggleItem(good)}
                >
                  {selectedItem === good ? "-" : "+"}
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
