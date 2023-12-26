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
  const [selectedGood, setGoods] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                onClick={() => setGoods('')}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
          : ('No goods selected')
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
                key={good}
              >
                <td>
                  <button
                    onClick={() => (
                      setGoods(!isSelected && good)
                    )}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                  >
                    {isSelected ? '-' : '+'}
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
