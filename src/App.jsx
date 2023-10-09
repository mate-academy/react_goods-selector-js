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
          {goods.map((good) => {
            const isSelectedGood = good === select;

            return (

              <tr
                data-cy="Good"
                className={isSelectedGood
                  ? 'has-background-success-light'
                  : ''}
                key={good}
              >
                <td>
                  <button
                    data-cy={isSelectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                    onClick={() => {
                      selectedGood(isSelectedGood ? '' : good);
                    }}
                  >
                    {isSelectedGood
                      ? '-'
                      : '+'}
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
