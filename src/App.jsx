import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

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
  const [thisGood, setGood] = useState('Jam');
  const NoSelected = 'No goods selected';
  const clearGoodsSDtate = () => {
    setGood(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {thisGood ? `${thisGood} is selected` : NoSelected}
        {thisGood !== null && (
          <button
            onClick={() => {
              setGood('');
              clearGoodsSDtate();
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )
        }

      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <>
              <tr
                data-cy="Good"
                className={cn('td', {
                  'has-background-success-light': thisGood === good,
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      setGood(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className={cn('button', {
                      'button is-info': thisGood === good,
                    })}
                  >
                    {thisGood === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            </>

          ))}
        </tbody>
      </table>
    </main>
  );
};
