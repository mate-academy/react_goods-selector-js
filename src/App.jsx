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

export const App = () => {
  const [select, selectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center"
      >
        {select === ''
          ? 'No goods selected'
          : (
            <>
              {`${select} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => selectedGood('')}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={good === select
                ? 'has-background-success-light'
                : ''}
              key={good}
            >
              <td>
                <button
                  data-cy={good === select
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={cn('button', { 'is-info': good === select })}
                  onClick={() => {
                    selectedGood(good === select ? '' : good);
                  }}
                >
                  {good === select
                    ? '-'
                    : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
