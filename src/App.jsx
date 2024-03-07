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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          'No goods selected'
        ) : (
          <>
            {selectedGood} is selected
            <button
              className="delete ml-3"
              type="button"
              onClick={() => setSelectedGood('')}
              data-cy="ClearButton"
            />
          </>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                key={good}
                className={classNames({
                  'has-background-success-light': isGoodSelected,
                })}
                data-cy="Good"
              >
                <td>
                  {isGoodSelected ? (
                    <button
                      data-cy="RemoveButton"
                      className="button is-info"
                      type="button"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      className="button"
                      type="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  )}
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
