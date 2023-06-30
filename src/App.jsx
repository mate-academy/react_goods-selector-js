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

  function currentGoodIsSelected(good) {
    return good === selectedGood;
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
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': currentGoodIsSelected(good),
              })}
            >
              <td>
                <button
                  data-cy={currentGoodIsSelected(good)
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={classNames('button',
                    { 'is-info': currentGoodIsSelected(good) })}
                  onClick={() => clickOnGood(good)}
                >
                  {currentGoodIsSelected(good) ? '-' : '+'}
                </button>
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
