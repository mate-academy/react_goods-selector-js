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

  function clickOnGood(good) {
    setSelectedGood(prev => (prev === good ? '' : good));
  }

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
            const currentGoodIsSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': currentGoodIsSelected,
                })}
              >
                <td>
                  <button
                    data-cy={currentGoodIsSelected
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={classNames('button',
                      { 'is-info': currentGoodIsSelected })}
                    onClick={() => clickOnGood(good)}
                  >
                    {currentGoodIsSelected ? '-' : '+'}
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
