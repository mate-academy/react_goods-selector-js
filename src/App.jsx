import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
// import { selectedGoods } from 'cypress/types/lodash';

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
    setSelectedGood(null);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <>
            <button
              onClick={reset}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isActive = selectedGood === good;

            function handleClick() {
              return isActive ? reset() : setSelectedGood(good);
            }

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isActive,
                })}
              >
                <td>
                  <button
                    onClick={handleClick}
                    data-cy={cn({
                      AddButton: !isActive,
                      RemoveButton: isActive,
                    })}
                    type="button"
                    className={cn('button', {
                      'is-info': isActive,
                    })}
                  >
                    <span>{isActive ? '-' : '+'}</span>

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
