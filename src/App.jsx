import 'bulma/css/bulma.css';
import './App.scss';
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
  const [selectGood, setSelectGood] = useState('Jam');
  const isSelected = selectGood !== '';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelected ? `${selectGood} is selected` : 'No goods selected'}
        {isSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelectedGood = selectGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelectedGood ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelectedGood ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectGood('')}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectGood(good)}
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
