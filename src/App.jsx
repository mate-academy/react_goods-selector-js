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
  const [selectedItem, setSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedItem ? `${selectedItem} is selected` : 'No goods selected'}
        {selectedItem && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected('')}
            aria-label="clear selection"
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              key={item}
              data-cy="Good"
              className={
                selectedItem === item ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedItem === item ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className={
                      selectedItem === item ? 'button is-info' : 'button'
                    }
                    onClick={() => {
                      if (selectedItem === item) {
                        setSelected('');
                      } else {
                        setSelected(item);
                      }
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={
                      selectedItem === item ? 'button is-success' : 'button'
                    }
                    onClick={() => {
                      if (selectedItem === item) {
                        setSelected('No goods selected');
                      } else {
                        setSelected(item);
                      }
                    }}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
