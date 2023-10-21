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

const DEFAULT_GOOD = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD);

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
                onClick={() => setSelectedGood('')}
              />
            </>
          )
          : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                classNames({ 'has-background-success-light': isSelected })
                }
              >
                <td>
                  <button
                    data-cy={
                      isSelected
                        ? 'RemoveButton'
                        : 'AddButton'
                    }
                    type="button"
                    className={
                      classNames('button', { 'is-info': isSelected })
                    }
                    onClick={
                      isSelected
                        ? () => setSelectedGood('')
                        : () => setSelectedGood(good)
                    }
                  >
                    {isSelected
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>
                <td data-cy="GoodTitle">
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
