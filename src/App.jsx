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

  const reset = () => {
    setSelectedGood('');
  };

  const toggleGoodSelection = (good) => {
    if (selectedGood !== good) {
      setSelectedGood(good);
    } else {
      reset();
    }
  };

  const isGoodSelected = good => selectedGood === good;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={reset}
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
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': isGoodSelected(good),
              })}
            >
              <td>
                <button
                  data-cy={(!isGoodSelected(good))
                    ? 'AddButton' : 'RemoveButton'}
                  type="button"
                  className={isGoodSelected(good)
                    ? 'button is-info' : 'button'}
                  onClick={() => toggleGoodSelection(good)}

                >
                  {selectedGood !== good ? '+' : '-'}
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
