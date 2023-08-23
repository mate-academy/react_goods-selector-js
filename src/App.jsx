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
const keys = {};

goods.forEach((good, index) => {
  keys[good] = index + 1;
});

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const selectGoodHandler = (good, isSelected) => {
    if (isSelected) {
      setSelectedGood('');

      return;
    }

    setSelectedGood(good);
  };

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
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={classNames(
                  { 'has-background-success-light': isSelected },
                )}
                key={keys[good]}
              >
                <td>
                  <button
                    data-cy={isSelected
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={classNames('button',
                      { 'is-info': isSelected })}
                    onClick={() => selectGoodHandler(good, isSelected)}
                  >
                    {isSelected
                      ? '-'
                      : '+'
                  }
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
