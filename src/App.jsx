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
  const [selected, setSelected] = useState('Jam');

  const resetFilter = () => setSelected('');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selected ? `${selected} is selected` : 'No goods selected'}

        {selected && (
          <button
            onClick={resetFilter}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          { goods.map((good) => {
            const isActive = good === selected;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({ 'has-background-success-light': isActive })}
              >

                { isActive
                  ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={resetFilter}
                      >
                        -
                      </button>
                    </td>
                  )
                  : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelected(good)}
                      >
                        +
                      </button>
                    </td>
                  )}

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
