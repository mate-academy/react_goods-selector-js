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
  const DEFAULT_GOOD = 'Jam';
  const EMPTY_VALUE = '';

  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD);
  const isSelected = good => good === selectedGood;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
        }

        {!!selectedGood && (
          <button
            onClick={() => setSelectedGood(EMPTY_VALUE)}
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
              className={cn({
                'has-background-success-light': isSelected(good),
              })}
              key={good}
            >
              <td>
                <button
                  onClick={() => (isSelected(good)
                    ? setSelectedGood(EMPTY_VALUE)
                    : setSelectedGood(good)
                  )}
                  className={cn('button', {
                    'is-info': isSelected(good),
                  })}
                  data-cy={isSelected(good)
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                >
                  {isSelected(good)
                    ? '-'
                    : '+'
                  }
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
