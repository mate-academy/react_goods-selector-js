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
  const [state, setState] = useState('Jam');

  const checkStateFunc = (good) => {
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

      {/* {state !== ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${state} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => checkStateFunc('')}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      } */}

      <h1 className="title is-flex is-align-items-center">
        {state ? `${state} is selected` : 'No goods selected'}
        {state && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => checkStateFunc('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': state === good,
              })}
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => checkStateFunc(good)}
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
