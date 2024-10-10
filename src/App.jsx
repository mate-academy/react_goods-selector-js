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

  const showSelection = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const resetGood = () => setSelectedGood('');

  const handleSelectedGoods = currentGood => {
    if (selectedGood === currentGood) {
      resetGood();
    } else {
      setSelectedGood(currentGood);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {showSelection}

        {!!selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => resetGood()}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={classNames({
                  'has-background-success-light': isSelected,
                })}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelected,
                    })}
                    onClick={() => handleSelectedGoods(good)}
                  >
                    {isSelected ? '-' : '+'}
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
