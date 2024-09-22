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

  const isSelected = good => good === selectedGood;

  const handleReset = () => setSelectedGood(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleReset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': isSelected(good),
              })}
            >
              <td>
                <button
                  onClick={() =>
                    setSelectedGood(isSelected(good) ? null : good)
                  }
                  data-cy={isSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': isSelected(good),
                  })}
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
