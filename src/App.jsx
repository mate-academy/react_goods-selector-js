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
  const [selectedItem, setSelectedItem] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedItem ? `${selectedItem} is selected` : 'No goods selected'}

        {selectedItem && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedItem('')}
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
                selectedItem === item
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  onClick={() => (selectedItem === item
                    ? setSelectedItem('')
                    : setSelectedItem(item))
                  }
                  data-cy={
                    selectedItem === item
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    selectedItem === item
                      ? 'button is-info'
                      : 'button'
                  }
                >
                  {selectedItem === item ? `-` : '+'}
                </button>
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
