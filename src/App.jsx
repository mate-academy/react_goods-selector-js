import { useState } from 'react';
import cn from 'classnames';
import { nanoid } from 'nanoid';
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
  const [currentGood, setCurrentGood] = useState('Jam');

  const handleAddSelectedGood = good => setCurrentGood(good);
  const handleClearSelectedGood = () => setCurrentGood(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {currentGood ? (
          <>
            {`${currentGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleClearSelectedGood}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodActive = good === currentGood;

            return (
              <tr
                data-cy="Good"
                key={nanoid()}
                className={cn({
                  'has-background-success-light': isGoodActive,
                })}
              >
                <td>
                  {isGoodActive ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={handleClearSelectedGood}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleAddSelectedGood(good)}
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
