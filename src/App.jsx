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
  const [good, setGoods] = useState('Jam');

  function toogleSelect(selectGood) {
    if (selectGood === good) {
      setGoods('');
    } else {
      setGoods(selectGood);
    }
  }

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {good.length > 0 ? `${good} is selected` : 'No goods selected'}

        {good.length > 0 && (
          <button
            onClick={() => {
              toogleSelect('');
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

          {goods.map((item) => {
            const isSelected = item === good;

            return (
              <tr
                key={item}
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  <button
                    onClick={() => toogleSelect(item)}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
