import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';

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
  let mainTitle = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  if (selectedGood && selectedGood.length > 0) {
    mainTitle = (
      <h1 className="title is-flex is-align-items-center">
        {selectedGood} is selected
        <button
          className="delete ml-3"
          data-cy="ClearButton"
          type="button"
          onClick={() => setSelectedGood('')}
        />
      </h1>
    );
  }

  return (
    <main className="section container">
      {mainTitle}
      <table className="table">
        <tbody>
          {goods.map(n => (
            <tr
              key={n}
              data-cy="Good"
              className={classNames('is-flex', 'is-align-items-center', {
                'has-background-success-light': n === selectedGood,
              })}
            >
              <td className="is-vcentered">
                {n !== selectedGood ? (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(n)}
                  >
                    +
                  </button>
                ) : (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="is-info"
                    onClick={() => setSelectedGood('')}
                  >
                    -
                  </button>
                )}
              </td>
              <td className="is-vcentered" data-cy="GoodTitle">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
