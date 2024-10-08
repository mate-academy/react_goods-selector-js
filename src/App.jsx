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
  const [selGood, setSelecGood] = useState(
    goods.find(good => good === 'Jam') || goods[0],
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selGood ? `${selGood} is selected` : `No goods selected`}
        {selGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelecGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selGood === good ? 'has-background-success-light' : ' '
                }
              >
                <td>
                  <button
                    data-cy={selGood === good ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': selGood === good })}
                    onClick={() =>
                      selGood === good ? setSelecGood('') : setSelecGood(good)
                    }
                  >
                    {selGood === good ? '-' : '+'}
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
