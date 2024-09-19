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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  const handleSetGood = good => setSelectedGood(good);
  const handleCleanGood = () => setSelectedGood('');

  const isSelected = good => good === selectedGood;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleCleanGood}
            />
          </>
        ) : (
          `No goods selected`
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-text-black has-background-success-light': isSelected(good),
              })}
            >
              <td>
                <button
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': isSelected(good),
                  })}
                  onClick={() =>
                    isSelected(good) ? handleCleanGood() : handleSetGood(good)
                  }
                >
                  {isSelected(good) ? '-' : '+'}
                </button>
              </td>

              <td
                data-cy="GoodTitle"
                className={cn('is-vcentered', {
                  'has-text-black': isSelected(good),
                })}
              >
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
