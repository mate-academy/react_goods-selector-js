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

  return (
    <main className="section container">

      {selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
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
                    onClick={() => {
                      if (isSelected) {
                        setSelectedGood('');
                      } else {
                        setSelectedGood(good);
                      }
                    }}
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
