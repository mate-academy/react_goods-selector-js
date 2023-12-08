import { useState } from 'react';
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

  return (
    <main className="section container">
      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </h1>
        )
        : (<h1 className="title">No goods selected</h1>)
      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const hasGood = selectedGood === good;

            return (
              <tr
                className={cn({ 'has-background-success-light': hasGood })}
                key={good}
                data-cy="Good"
              >
                <td>
                  <button
                    data-cy={hasGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': hasGood })}
                    onClick={() => setSelectedGood(good)}
                  >
                    {hasGood ? '-' : '+'}
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
