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

  const handleSelect = (good) => {
    setSelectedGood(
      good === selectedGood
        ? ''
        : good,
    );
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          !selectedGood
            ? 'No goods selected'
            : `${selectedGood} is selected`
        }

        {
          selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => handleSelect('')}
            />
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': good === selectedGood,
                })}
                key={good}
              >
                <td>
                  <button
                    data-cy={
                      good === selectedGood
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={classNames(
                      'button',
                      { 'is-info': good === selectedGood },
                    )}
                    onClick={() => handleSelect(good)}
                  >
                    {
                      good === selectedGood
                        ? '-'
                        : '+'
                    }
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {good}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
