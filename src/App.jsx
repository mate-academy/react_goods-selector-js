import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
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

  const handleChangeGood = (good) => {
    setSelectedGood(good);
  };

  const handleClearGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood.length > 0 ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' '}
          is selected

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleClearGood()}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn({
                      button: true,
                      'is-info': isSelected,
                    })}
                    onClick={() => (
                      isSelected ? handleClearGood() : handleChangeGood(good)
                    )}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
