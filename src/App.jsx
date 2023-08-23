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

  const valueCheck = (good) => {
    if (value === good) {
      setValue(null);
    } else {
      setValue(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!value
          ? `No goods selected`
          : `${value} is selected`
        }
        {value && (
          <button
            onClick={() => {
              setValue(null);
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const handleClick = () => {
              valueCheck(good);
            };

            return (
              <tr
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': good === value })}
              >
                <td>
                  {value !== good ? (
                    <button
                      onClick={handleClick}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  ) : (
                    <td>
                      <button
                        onClick={handleClick}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    </td>

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
