import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

export const goods = [
  { name: 'Dumplings', id: 0 },
  { name: 'Carrot', id: 1 },
  { name: 'Eggs', id: 2 },
  { name: 'Ice cream', id: 3 },
  { name: 'Apple', id: 4 },
  { name: 'Bread', id: 5 },
  { name: 'Fish', id: 6 },
  { name: 'Honey', id: 7 },
  { name: 'Jam', id: 8 },
  { name: 'Garlic', id: 9 },
];

export const App = () => {
  const [state, setState] = useState({ name: 'Jam', id: 8 });

  const setAndValidateState = (good) => {
    if (state === '') {
      setState(good);
    } else if (good === state) {
      setState('');
    } else {
      setState(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {state ? `${state.name} is selected` : 'No goods selected'}
        {state && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setAndValidateState('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good.id}
              data-cy="Good"
              className={cn({
                'has-background-success-light': state.name === good.name,
              })}
            >
              <td>
                {
                  state && state.name === good.name ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setAndValidateState('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setAndValidateState(good)}
                    >
                      +
                    </button>
                  )
                }

              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
