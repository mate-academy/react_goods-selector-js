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
  const [select, seSelect] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {select ? `${select} is selected` : 'No goods selected'}
        {select && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => seSelect('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={good === select ? 'has-background-success-light' : ''}
            >
              <td>
                {select !== good && (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => seSelect(good)}
                  >
                    +
                  </button>
                )}
                {select === good && (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => seSelect('')}
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
