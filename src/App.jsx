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

function Good({ good, selectedGood, setSelectedGood }) {
  const selected = good === selectedGood;

  return (
    <tr
      data-cy="Good"
      className={selected ? 'has-background-success-light' : ''}
      key={good}
    >
      <td>
        {selected ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => setSelectedGood('')}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => setSelectedGood(good)}
          >
            +
          </button>
        )}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
}

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          'No goods selected'
        ) : (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good
              good={good}
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
              key={good}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
