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
  const [message, setMessage] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {message !== 'No goods selected' && (
          <button
            onClick={() => {
              setMessage('No goods selected');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                `${good} is selected` === message &&
                'has-background-success-light'
              }
            >
              <td>
                <button
                  onClick={() => {
                    // eslint-disable-next-line no-unused-expressions
                    message === `${good} is selected`
                      ? setMessage('No goods selected')
                      : setMessage(`${good} is selected`);
                  }}
                  data-cy={
                    `${good} is selected` === message
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    `${good} is selected` === message
                      ? 'button is-info'
                      : 'button'
                  }
                >
                  {`${good} is selected` === message ? '-' : '+'}
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
