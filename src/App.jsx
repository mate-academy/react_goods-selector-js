import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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
  const [selectGood, setgood] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood ? `${selectGood} selected` : 'No goods selected'}

        {selectGood && (
          <button
            data-cy="ClearButton"
            onClick={() => {
              setgood('');
            }}
            type="button"
            className="delete ml-3"
          />
        )}

      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const clickOnGood = () => {
              setgood(good === selectGood ? null : good);
            };

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': good === selectGood,
                })}
              >
                <td>
                  {good === selectGood
                    ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={clickOnGood}
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={clickOnGood}
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
