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

  const handle = good => {
    setSelectedGood(good);
  };

  const clean = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected{' '}
            <button
              data-cy="ClearButton"
              type="button"
              onClick={clean}
              className="delete ml-3"
            />{' '}
          </>
        ) : (
          'no goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
  {goods.map(g => (
    <tr
      key={g}
      data-cy="Good"
      className={selectedGood === g ? 'has-background-success-light' : ''}
    >
      <td>
        {selectedGood === '' && (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => setSelectedGood(g)}
          >
            +
          </button>
        )}

        {selectedGood === g && (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGood('')}
          >
            -
          </button>
        )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {g}
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </main>
  );
};
