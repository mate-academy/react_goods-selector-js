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
            onClick={() => {
              setSelectedItem('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                selectedItem === good && 'has-background-success-light'
              }
            >
              <td>
                <button
                  data-cy={`${selectedItem === good ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`${selectedItem === good ? 'button is-info' : 'button'}`}
                  onClick={() => {
                    setSelectedItem(selectedItem === good ? '' : good);
                  }}
                >
                  {`${selectedItem === good ? '-' : '+'}`}
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
