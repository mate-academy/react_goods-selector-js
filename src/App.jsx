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
  const unselected = () => {
    setSelected('');
  };

  return (
    <main className="section container">
      {selected === ''
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selected} is selected`}

            <button
              onClick={unselected}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (selected !== good
            ? (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    onClick={(event) => {
                      const newGood = event.target.closest('td').nextSibling;

                      setSelected(`${newGood.innerText}`);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )
            : (
              <tr
                data-cy="Good"
                className="has-background-success-light"
                key={good}
              >
                <td>
                  <button
                    onClick={unselected}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )))}
        </tbody>
      </table>
    </main>
  );
};
