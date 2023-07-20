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
  const firstSelected = 'Jam';
  const [value, setValue] = useState(firstSelected);

  return (
    <main className="section container">
      {value === null ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}
          <button
            onClick={() => {
              setValue(null);
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            const isSelectedGood = value === good;

            return (
              <tr
                data-cy="Good"
                key={`${index + 1}`}
                className={cn({
                  'has-background-success-light': isSelectedGood,
                })}
              >
                <td>
                  <button
                    onClick={() => {
                      setValue(good);
                      if (isSelectedGood) {
                        setValue(null);
                      }
                    }}
                    data-cy={isSelectedGood ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelectedGood })}
                  >
                    {isSelectedGood ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
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
