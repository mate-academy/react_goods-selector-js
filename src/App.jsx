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
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value.length === 0 ? 'No goods selected' : `${value} is selected`}
        {value && (
          <button
            onClick={() => setValue('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(sweet => (
            <tr
              key={sweet}
              data-cy="Good"
              className={sweet === value ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => setValue(sweet === value ? '' : sweet)}
                  data-cy={sweet === value ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={sweet === value ? 'button is-info' : 'button'}
                >
                  {sweet === value ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {sweet}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
