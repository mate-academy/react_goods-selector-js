import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

  const selectGood = good => setSelectedGood(good === selectedGood ? '' : good);
  const removeGood = () => setSelectedGood('');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood.length ? (
          <>
            {`${selectedGood} is selected`}

            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={removeGood}
            />
          </>
        ) : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isCurrentGoodSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isCurrentGoodSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isCurrentGoodSelected
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': isCurrentGoodSelected },
                    )}
                    onClick={() => selectGood(good)}
                  >
                    {isCurrentGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
