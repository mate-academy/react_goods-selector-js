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
  const [activeGood, setActiveGood] = useState('Jam');

  const resetActiveGood = () => setActiveGood(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {activeGood ? `${activeGood} is selected` : 'No goods selected'}

        {activeGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={resetActiveGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isActiveGood = good === activeGood;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isActiveGood,
                })}
              >
                <td>
                  {isActiveGood ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={resetActiveGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setActiveGood(good)}
                    >
                      +
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
