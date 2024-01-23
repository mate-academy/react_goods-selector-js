import 'bulma/css/bulma.css';
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
  const [value, setValue] = useState(['Jam']);

  // console.log(value);

  const addValue = (good) => {
    if (value.length === 0) {
      setValue(good);
    }
  };

  const removeValue = () => {
    setValue('');
  };

  return (
    <main className="section container">
      { value === '' && (
      <h1 className="title is-flex is-align-items-center">
        No goods selected
      </h1>
      )}

      {value && (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setValue('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          <tr
            data-cy="Good"
            className={`${value.includes('Dumplings') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {value.includes('Dumplings')
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => removeValue('Dumplings')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addValue('Dumplings')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${value.includes('Jam') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {value.includes('Jam')
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => removeValue('Jam')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addValue('Jam')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${value.includes('Garlic') ? 'has-background-success-light' : ''}`}
          >
            <td>
              {value.includes('Garlic')
                ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button"
                    onClick={() => removeValue('Garlic')}
                  >
                    -
                  </button>
                )
                : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button is-info"
                    onClick={() => addValue('Garlic')}
                  >
                    +
                  </button>
                )}
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
