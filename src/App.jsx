import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
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
  // const [stateMessege, setStateMessege] = useState(false);
  const [goodName, setGood] = useState('Jam');
  const reset = () => {
    setGood(null);
    // setStateMessege(true);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodName ? `${goodName} is selected` : 'No goods selected'}
        {goodName && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames('', {
                  'has-background-success-light': goodName === good,
                })}
              >
                {goodName === good ? (
                  ''
                ) : (
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        setGood(good);
                        // setStateMessege(false);
                      }}
                    >
                      +
                    </button>
                  </td>
                )}

                {goodName === good && (
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={reset}
                    >
                      -
                    </button>
                  </td>
                )}

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
