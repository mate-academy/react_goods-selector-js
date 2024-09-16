import { useState } from 'react';
import cn from 'classnames';

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

export const App = () => {
  const goodStart = goods.find(value => value === 'Jam');
  const [good, setGood] = useState(goodStart);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? (
          <>
            {`${good} is selected`}
            <button
              onClick={() => {
                setGood(null);
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(thing => {
            const activeGood = Object.is(good, thing);

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': activeGood,
                })}
              >
                <td>
                  <button
                    className={cn('button', {
                      'is-info': activeGood,
                    })}
                    onClick={() =>
                      !activeGood ? setGood(thing) : setGood(null)
                    }
                    data-cy={!activeGood ? 'AddButton' : 'RemoveButton'}
                    type="button"
                  >
                    {!activeGood ? '+' : '-'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {thing}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
