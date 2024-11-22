import 'bulma/css/bulma.css';
import cn from 'classnames';
import './App.scss';
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
  const [selected, setSelected] = useState('Jam');
  const clearSelection = clear => {
    clear('');
  };

  return (
    <main className="section container">
      {!selected && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {selected && (
        <h1 className="title is-flex is-align-items-center">
          {selected} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => clearSelection(setSelected)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selected === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  <button
                    data-cy={`${isSelected ? 'Remove' : 'Add'}Button`}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                    onClick={() => setSelected(isSelected ? '' : good)}
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
