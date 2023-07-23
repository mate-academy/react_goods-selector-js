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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value === 'No goods selected' ? (
        <h1 className="title is-flex is-align-items-center">{value}</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('No goods selected');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((product) => {
            const classAdd = value === product
              && 'has-background-success-light';

            return (
              <tr
                data-cy="Good"
                className={classAdd}
                key={product}
              >
                <td>
                  {value === product ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setValue('No goods selected');
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
                        setValue(product);
                      }}
                    >
                      +
                    </button>
                  )}

                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {product}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
