import { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setSelectedGood] = useState(goods.at(-2));
  const isGoodSelected = selectedGood.length !== 0;

  const clearSelectedGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isGoodSelected ? `${selectedGood} is selected` : 'No goods selected'}
        {isGoodSelected && (
          <button
            onClick={clearSelectedGood}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(currentGood => {
            const isCurrentGoodSelected = selectedGood === currentGood;
            const selectCurrentGood = () => {
              setSelectedGood(currentGood);
            };

            return (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': isCurrentGoodSelected,
                })}
              >
                <td>
                  <button
                    onClick={
                      isCurrentGoodSelected
                        ? clearSelectedGood
                        : selectCurrentGood
                    }
                    data-cy={
                      isCurrentGoodSelected ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': isCurrentGoodSelected,
                    })}
                  >
                    {isCurrentGoodSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {currentGood}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
