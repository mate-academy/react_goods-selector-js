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

// function reset(setValue) {
//   setValue('No goods selected');
// }

export const App = () => {
  const NO_GOODS = 'No goods selected';
  const [value, setValue] = useState('Jam');

  function reset() {
    setValue(NO_GOODS);
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {(value !== NO_GOODS)
          ? (
            <>
              {`${value} is selected`}

              <button
                onClick={reset}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
          : NO_GOODS
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={value === good && 'has-background-success-light'}
              key={good}
            >
              <td>
                {(value !== good)
                  ? (
                    <button
                      onClick={() => {
                        setValue(good);
                      }}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )
                  : (
                    <button
                      onClick={reset}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
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
