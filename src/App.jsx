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
  const defaultState = 'Jam';
  const [selectedGood, setSelectedGood] = useState(defaultState);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                selectedGood === good
                  ? 'has-background-success-light'
                  : null
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={cn('button',
                    { 'is-info': selectedGood === good })}
                  onClick={() => {
                    setSelectedGood(selectedGood === good ? null : good);
                  }}
                >
                  {selectedGood === good ? '-' : '+'}
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
