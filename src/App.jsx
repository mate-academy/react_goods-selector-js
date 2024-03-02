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
  const [active, setActive] = useState('Jam');

  return (
    <main className="section container">
      {!active && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {active && (
        <h1 className="title is-flex is-align-items-center">
          {active} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={e => {
              setActive(false);
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, ind) => {
            const clickBtn = e => {
              if (active === good) {
                setActive('');
              } else {
                setActive(good);
              }
            };

            return (
              <tr
                // eslint-disable-next-line react/no-array-index-key
                key={`good-${good}-${ind}`}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': good === active,
                })}
              >
                <td>
                  {!(good === active) ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={clickBtn}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={clickBtn}
                    >
                      -
                    </button>
                  )}
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
