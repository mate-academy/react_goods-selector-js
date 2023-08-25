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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className={cn(
        'title',
        'is-flex',
        'is-align-items-center',
      )}
      >
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => (
            <tr
              key={good}
              className={cn({
                'has-background-success-light': selectedGood === good,
              })}
              data-cy="Good"
            >
              <td>
                <button
                  onClick={() => setSelectedGood(
                    selectedGood === good
                      ? ''
                      : good,
                  )}
                  data-cy={selectedGood === good
                    ? 'RemoveButton'
                    : 'AddButton'}
                  type="button"
                  className={cn('button', {
                    'is-info': selectedGood === good,
                  })}
                >
                  {selectedGood === good
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
