import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

const goods = [
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
  const [good, setGood] = useState('Jam');

  const clearGood = () => {
    setGood('');
  };

  const renderItem = itemName => (
    <tr
      data-cy="Good"
      className={classNames(
        { 'has-background-success-light': (good === itemName) },
      )}
    >
      <td>
        <button
          data-cy="RemoveButton"
          type="button"
          className={classNames(
            'button',
            { 'is-info': (good === itemName) },
          )}
          onClick={() => setGood(itemName)}
        >
          {good === itemName ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {itemName}
      </td>
    </tr>
  );

  return (
    <main className="section container">
      {good.length === 0
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={clearGood}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(item => (renderItem(item)))}
        </tbody>
      </table>
    </main>
  );
};
