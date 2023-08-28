import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
import { useState } from 'react';

const DEFAULT_GOOD = 'Jam';
const NO_GOOD_SELECTED = '';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  DEFAULT_GOOD,
  'Garlic',
];

export const App = () => {
  const [selectedGood, setGood] = useState(DEFAULT_GOOD);
  const isSelectedGood = good => good === selectedGood;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== NO_GOOD_SELECTED
          ? (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setGood(NO_GOOD_SELECTED)}
              />
            </>
          )
          : (
            'No goods selected'
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': isSelectedGood(good),
              })}
            >
              <td>
                <button
                  data-cy={isSelectedGood(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isSelectedGood(good) ? 'button is-info' : 'button'}
                  onClick={() => setGood(isSelectedGood(good)
                    ? NO_GOOD_SELECTED
                    : good)}
                >
                  {isSelectedGood(good)
                    ? '-'
                    : '+'}
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
