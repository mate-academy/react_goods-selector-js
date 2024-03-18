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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === null
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className={cn(`delete ml-3`, {
              'is-hidden': selectedGood === null,
            })}
            onClick={() => setSelectedGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={cn({
                'has-background-success-light': good === selectedGood,
              })}
              data-cy="Good"
            >
              <td>
                {selectedGood === good ? (
                  <button
                    onClick={() => setSelectedGood(null)}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => setSelectedGood(good)}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
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

<td />;
