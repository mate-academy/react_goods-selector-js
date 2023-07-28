import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';

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

  function setGood(good) {
    setSelectedGood(prev => (prev === good ? '' : good));
  }

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        <h1 className="title">No goods selected</h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const goodIsSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': goodIsSelected })
                }
                key={good}
              >
                <td>
                  <button
                    onClick={() => setGood(good)}
                    data-cy={goodIsSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': goodIsSelected })}
                  >
                    {goodIsSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
