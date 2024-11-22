import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [chosenItem, setChosenItem] = useState('Jam');
  const [isSelected, setIsSelected] = useState(true);
  const [selectedRow, setSelectedRow] = useState('Jam');

  const clearSelection = () => {
    setChosenItem('');
    setIsSelected(false);
    setSelectedRow('');
  };

  return (
    <>
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {isSelected ? (
            <>
              {chosenItem} is selected
              <button
                onClick={clearSelection}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          ) : (
            'No goods selected'
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(item => (
              <tr
                key={item}
                data-cy="Good"
                className={
                  item === selectedRow ? 'has-background-success-light' : ''
                }
              >
                <td>
                  {item === chosenItem ? (
                    <button
                      onClick={clearSelection}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setChosenItem(item);
                        setIsSelected(true);
                        setSelectedRow(item);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
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
    </>
  );
};
