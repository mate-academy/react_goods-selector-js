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

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        </h1>

        {selectedGood && (
          <button
            type="button"
            className="button is-danger mb-4"
            onClick={() => setSelectedGood('')}
          >
            Clear
          </button>
        )}

        <table className="table is-bordered is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {goods.map((good, index) => (
              <tr
                key={good}
                className={
                  selectedGood === good ? 'has-background-success-light' : ''
                }
              >
                <td>{index + 1}</td>
                <td>{good}</td>
                <td>
                  {selectedGood === good ? (
                    <button
                      type="button"
                      className="button is-danger is-small"
                      onClick={() => setSelectedGood('')}
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="button is-info is-small"
                      onClick={() => setSelectedGood(good)}
                    >
                      Add
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
