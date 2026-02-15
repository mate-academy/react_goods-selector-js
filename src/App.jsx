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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}
      {value !== '' ? (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      {/* <h1 className="title is-flex is-align-items-center">
        {value !== null ? `${value} is selected` : 'No goods selected'}
      </h1> */}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({ 'has-background-success-light': value === good })}
              key={good}
            >
              <td>
                {value === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      setValue('');
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setValue(good);
                    }}
                  >
                    +
                  </button>
                )}
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

// <tr data-cy="Good" className="has-background-success-light">
//   <td data-cy="GoodTitle" className="is-vcentered">
//     Jam
//   </td>
// </tr>
