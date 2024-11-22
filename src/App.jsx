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

  const handleGoodSelection = good => {
    setSelectedGood(good);
  };

  const clearSelection = () => {
    setSelectedGood('');
  };

  const titleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          >
            Clear
          </button>
        )}
      </h1>

      <div className="goods-list">
        {goods.map(good => (
          <div
            key={good}
            data-cy="Good"
            className={classNames({
              'has-background-success-light': good === selectedGood,
            })}
          >
            <div className="good-info">
              {!selectedGood && (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => handleGoodSelection(good)}
                >
                  Select
                </button>
              )}
              {good === selectedGood && (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={clearSelection}
                >
                  Deselect
                </button>
              )}
              <span data-cy="GoodTitle">{good}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
