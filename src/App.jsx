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
  const [currentGood, setCurrentGood] = useState('Jam');

  function isSelectedGood(currentGoodSelected) {
    if (currentGoodSelected) {
      return `${currentGoodSelected} is selected`;
    }

    return `No goods selected`;
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isSelectedGood(currentGood)}

        {
          currentGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setCurrentGood('')}
            />
          )}
      </h1>

      <table className="table">
        <tbody>

          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn('', {
                'has-background-success-light': currentGood === good,
              })}
            >
              <td>
                {
                  good !== currentGood ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setCurrentGood(good)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setCurrentGood('')}
                    >
                      -
                    </button>
                  )
                }
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
