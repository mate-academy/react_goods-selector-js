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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const hasSelection = selectedGood !== '';
  const isSelected = name => selectedGood === name;
  const clearSelection = () => setSelectedGood('');

  const titleText = hasSelection
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}

        {hasSelection && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(name => {
            let button;

            if (isSelected(name)) {
              button = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={clearSelection}
                >
                  -
                </button>
              );
            } else {
              button = (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setSelectedGood(name)}
                >
                  +
                </button>
              );
            }

            return (
              <tr
                key={name}
                data-cy="Good"
                className={
                  isSelected(name) ? 'has-background-success-light' : undefined
                }
              >
                <td>{button}</td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
