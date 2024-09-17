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
  const notSelected = 'No goods selected';
  const [value, setValue] = useState('Jam');

  return (
    <main className="section container">
      {value === 'No goods selected' ? (
        <h1 className="title is-flex is-align-items-center">{notSelected}</h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${value} is selected`}
          <button
            onClick={() => setValue(notSelected)}
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
              className={good === value ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => {
                    return value === good
                      ? setValue(notSelected)
                      : setValue(good);
                  }}
                  type="button"
                  data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                  className={`button ${good === value ? 'is-info' : ''}`}
                >
                  {good === value ? '-' : '+'}
                </button>
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
