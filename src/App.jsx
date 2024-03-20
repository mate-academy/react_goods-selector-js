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
  const [value, setValue] = useState('Jam');
  const nullValue = () => {
    setValue('');
  };

  return (
    <main className="section container">
      {!value ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={nullValue}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isActive = value === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({ 'has-background-success-light': isActive })}
              >
                <td>
                  {!isActive ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setValue(good)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={nullValue}
                    >
                      -
                    </button>
                  )}
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
