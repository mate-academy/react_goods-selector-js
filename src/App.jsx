import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
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

const DEFAULT_GOOD = 'Jam';

export const App = () => {
  const [good, setGood] = useState(DEFAULT_GOOD);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? (
          <>
            {`${good} is selected`}
            <button
              onClick={() => setGood(null)}
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
          {goods.map(item => {
            const isGoodSelected = item === good;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
                key={item}
              >
                <td>
                  <button
                    onClick={() => setGood(isGoodSelected ? null : item)}
                    data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', {
                      'button is-info': isGoodSelected,
                    })}
                  >
                    {isGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
