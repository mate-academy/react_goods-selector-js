import { useState } from 'react';
import 'bulma/css/bulma.css';
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
  const [selected, setSelected] = useState('Jam');
  const unselect = () => {
    setSelected('');
  };

  return (
    <main className="section container">
      {!selected
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selected} is selected`}

            <button
              onClick={unselect}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => ((
            <tr
              data-cy="Good"
              key={good}
              className={selected === good && 'has-background-success-light'}
            >
              <td>
                {selected === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={unselect}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={(event) => {
                      setSelected(`${good}`);
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
          )
          ))}
        </tbody>
      </table>
    </main>
  );
};
