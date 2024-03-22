import 'bulma/css/bulma.css';
import cn from 'classnames';
import { useState } from 'react';
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
  const [goodSelected, setGoodSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodSelected ? (
          <>
            {goodSelected} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setGoodSelected(null)}
            />
          </>
        ) : (
          <>No goods selected</>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = goodSelected === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={
                      goodSelected === good ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                    onClick={() => setGoodSelected(isSelected ? null : good)}
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
