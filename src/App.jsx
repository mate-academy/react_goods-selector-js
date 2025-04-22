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
  const [value, setValue] = useState('Jam');

  const addItem = item => {
    setValue(item);
  };

  const clearSelection = () => {
    setValue('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : 'No goods selected'}
        {value && (
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>
      <table className="table">
        {goods.map(item => {
          return (
            <tr
              className={item === value ? 'has-background-success-light' : ''}
              key={item}
              data-cy="Good"
            >
              <td>
                {item === value ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={clearSelection}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => addItem(item)}
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
};
