import classNames from 'classnames';
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
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? `${good} is selected` : 'No goods selected'}

        {good && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodFromList => (
            <tr
              data-cy="Good"
              key={goodFromList}
              className={classNames({
                'has-background-success-light': goodFromList === good,
              })}
            >
              <td>
                {good === goodFromList ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => setGood(null)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setGood(goodFromList)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodFromList}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
