import React, { useState } from 'react';
import cn from 'classnames';
import { v4 as uuidv4 } from 'uuid';
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

const goodsWithId = goods.map(good => ({
  good,
  id: uuidv4(),
}));

export const App = () => {
  const [currentGood, setCurrentGood] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">

        {currentGood ? (
          <>
            {`${currentGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setCurrentGood(false)}
            />
          </>
        ) : (
          'No goods is selected'
        )}

      </h1>

      <table className="table">
        <tbody>

          {goodsWithId.map(({ good, id }) => {
            const isSelectedGood = currentGood === good;

            return (
              <tr
                data-cy="Good"
                key={id}
                className={cn(
                  { 'has-background-success-light': isSelectedGood },
                )}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                    onClick={() => {
                      setCurrentGood(isSelectedGood ? null : good);
                    }}
                  >
                    {isSelectedGood ? '+' : '-'}
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
