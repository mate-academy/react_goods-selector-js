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
  const [selectedGood, setGood] = useState('Jam');

  const isGoodSelected = good => selectedGood === good;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => setGood('')}
              />
            </>
          )
          : (
            'No goods selected'
          )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': isGoodSelected(good),
              })}
            >
              <td>
                <button
                  data-cy={isGoodSelected(good)
                    ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': isGoodSelected(good),
                  })}
                  onClick={isGoodSelected(good)
                    ? () => setGood('') : () => setGood(good)}
                >
                  {isGoodSelected(good) ? '-' : '+'}
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
