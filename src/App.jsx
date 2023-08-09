import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

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
  const [good, SetGood] = useState('Jam');

  return (
    <main className="section container">
      {!good
        ? <h1 className="title">No goods selected</h1>
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${good} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                SetGood('');
              }}
              aria-label="clear"
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(initialGood => (
            <tr
              key={initialGood}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === initialGood,
              })}
            >
              <td>
                <button
                  data-cy={
                    good === initialGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    good === initialGood
                      ? 'button is-info'
                      : 'button'
                  }
                  onClick={() => {
                    if (good === initialGood) {
                      SetGood('');
                    } else {
                      SetGood(initialGood);
                    }
                  }}
                >
                  {
                    good === initialGood
                      ? '-'
                      : '+'
                  }
                </button>
              </td>
              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {initialGood}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
