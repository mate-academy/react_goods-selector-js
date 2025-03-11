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
      {selected === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selected} is selected
          <button
            onClick={() => setSelected('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selected ? 'has-background-success-light' : ''
              }
            >
              <td>
                {good === selected ? (
                  <button
                    data-cy="RemoveButton"
                    onClick={() => {
                      setSelected('');
                    }}
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    onClick={() => {
                      setSelected(good);
                    }}
                    type="button"
                    className="button"
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
