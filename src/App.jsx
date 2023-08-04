import 'bulma/css/bulma.css';
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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">

      {value.length > 0
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${value} is selected`}

            <button
              onClick={() => {
                setValue('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        ) : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={` ${good === value && 'has-background-success-light'}`}
            >
              <td>
                <button
                  className={`button ${good === value && 'is-info'}`}
                  onClick={() => {
                    setValue(good);
                  }}
                  data-cy="AddButton"
                  type="button"

                >
                  {`${good === value ? '-' : '+'}`}
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
