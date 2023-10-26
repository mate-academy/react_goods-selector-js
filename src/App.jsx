import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const [activeGood, setActiveGood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {activeGood ? `${activeGood} is selected` : 'No goods selected'}

        {activeGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setActiveGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const clicker = () => {
              setActiveGood(good === activeGood ? null : good);
            };

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': good === activeGood,
                })}
              >
                <td>
                  {good === activeGood
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={clicker}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={clicker}
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
