/* eslint-disable no-console */
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
  const selectedGood = 'Jam';
  const [value, setValue] = useState(selectedGood);

  return (
    <main className="section container">
      {!value ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {value} is selected
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
          {goods.map(goodItem => (
            <tr
              data-cy="Good"
              key={goodItem}
              className={
                value === goodItem ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    value && value === goodItem ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={value === goodItem ? 'button is-info' : 'button'}
                  onClick={() =>
                    value === goodItem ? setValue('') : setValue(goodItem)
                  }
                >
                  {value && value === goodItem ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {goodItem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
