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

  const setNull = () => {
    setValue('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!value
          ? (
            <>No goods selected</>
          )
          : (
            <>
              {value}
              {' '}
              is selected

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={setNull}
              />
            </>
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((elem, index) => (
            <tr
              data-cy="Good"
              className={cn(
                { 'has-background-success-light': elem === value },
              )}
              key={elem}
            >
              <td>
                {elem !== value
                  ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setValue(elem)}
                    >
                      +
                    </button>
                  )
                  : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={setNull}
                    >
                      -
                    </button>
                  )
                }
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {elem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
