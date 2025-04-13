/* eslint-disable prettier/prettier */
import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

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
  const [selection, setSelection] = useState('Jam is selected');

  const addGood = good => {
    setSelectedGood(good);
    setSelection(`${good} is selected`);
  };

  const removeGood = () => {
    setSelectedGood('');
    setSelection('No goods selected');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selection}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGood}
          />
        )}

      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <React.Fragment key={good}>
              {selectedGood === good
                ? (
                  <tr data-cy="Good" className="has-background-success-light">
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={removeGood}
                      >
                        -
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )
                : (
                  <tr data-cy="Good">
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => addGood(good)}
                      >
                        +
                      </button>
                    </td>
                    <td data-cy="GoodTitle" className="is-vcentered">
                      {good}
                    </td>
                  </tr>
                )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </main>
  );
};
