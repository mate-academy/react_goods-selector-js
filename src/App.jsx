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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const clearSelection = () => setSelectedGood('');
  const isSelected = good => selectedGood === good;

  const selectOnClick = (good) => {
    if (isSelected(good)) {
      clearSelection();
    } else {
      setSelectedGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={clearSelection}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
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
                'has-background-success-light': isSelected(good),
              })}
            >
              <td>
                <button
                  onClick={() => selectOnClick(good)}
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': isSelected(good),
                  })}
                >
                  {isSelected(good) ? (
                    '-'
                  ) : (
                    '+'
                  )}
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
