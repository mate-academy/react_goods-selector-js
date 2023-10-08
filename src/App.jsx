import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import classNames from 'classnames';

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
  const [item, setItem] = useState('Jam');

  return (
    <main className="section containe">
      {item ? (
        <h1 className="title is-flex is-align-items-center">
          {`${item} is selected`}

          <button
            data-cy="Addbuton"
            type="button"
            className="delete ml-3"
            onClick={() => setItem('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((nameofen) => {
            const isActive = nameofen === item;

            return (
              <tr
                data-cy="Good"
                key={nameofen}
                className={`${
                  isActive ? 'has-background-success-light' : ''
                }`}
              >
                <td>
                  <button
                    data-cy={isActive ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isActive ? 'is-info' : ''}`}
                    onClick={() => setItem(isActive ? '' : nameofen)}
                  >
                    {isActive ? '-' : '+'}
                  </button>
                </td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {nameofen}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
