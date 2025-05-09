import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
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
  const [message, setMessage] = useState('Jam');

  return (
    <main className="section container">
      {!message ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${message} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setMessage(null)}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
            const comparison = good === message;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': comparison,
                })}
              >
                <td>
                  <button
                    data-cy={comparison ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'is-info': comparison,
                    })}
                    onClick={() =>
                      comparison ? setMessage(null) : setMessage(good)
                    }
                  >
                    {comparison ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
