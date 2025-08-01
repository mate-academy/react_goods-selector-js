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
  const [selected, setSelected] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selected.length > 0 ? (
          <>
            {`${selected} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelected('')}
            />
          </>
        ) : (
          `No goods selected`
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                good === selected ? `has-background-success-light` : ``
              }
            >
              {good !== selected ? (
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelected(good)}
                  >
                    +
                  </button>
                </td>
              ) : (
                <td>
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setSelected('')}
                  >
                    -
                  </button>
                </td>
              )}

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
