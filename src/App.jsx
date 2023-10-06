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
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected ? (`${selected} is selected`) : (
          'No goods selected'
        )}

        {selected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelected('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = good === selected;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn(
                  { 'has-background-success-light': isGoodSelected },
                )}
              >
                <td>
                  <button
                    data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button',
                      { 'is-info': isGoodSelected })}
                    onClick={() => {
                      setSelected(isGoodSelected ? '' : good);
                    }}
                  >
                    {isGoodSelected ? '-' : '+'}
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
