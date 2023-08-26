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
  const isSelected = good => (good === selectedGood);

  return (
    <main className="section container">
      { !selectedGood
      && (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      )}

      { selectedGood
      && (
        <h1
          className="title is-flex is-align-items-center"
        >
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn('',
                { 'has-background-success-light': isSelected(good) })}
            >
              <td>
                { !isSelected(good)
                && (
                  <button
                    onClick={() => {
                      setSelectedGood(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}

                { isSelected(good)
                && (
                  <button
                    onClick={() => {
                      setSelectedGood('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
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
