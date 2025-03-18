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
  const [selectedItem, setSelectedItem] = useState(goods[8]);

  const handleClear = () => {
    setSelectedItem('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedItem ? (
          <>
            {selectedItem} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClear}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedItem === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedItem === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    selectedItem === good ? 'button is-info' : 'button'
                  }
                  onClick={() => {
                    if (selectedItem === good) {
                      handleClear();
                    } else {
                      setSelectedItem(good);
                    }
                  }}
                >
                  {selectedItem === good ? '-' : '+'}
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
