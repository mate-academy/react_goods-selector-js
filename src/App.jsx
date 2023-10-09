import 'bulma/css/bulma.css';
import { useState } from 'react';
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
  const [selectedGood, setSelectedGood] = useState('Jam');
  const styleForTable = 'has-background-success-light';
  const styleForButton = 'button is-info';

  return (
    <main className="section container">
      <h1
        className="title is-flex is-align-items-center"
      >
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`

        }
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood
                && `${styleForTable}`
              }
            >
              <td>
                <button
                  data-cy={
                    good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    good === selectedGood
                      ? styleForButton
                      : 'button'
                  }
                  onClick={
                    good === selectedGood
                      ? () => setSelectedGood('')
                      : () => setSelectedGood(good)
                    }
                >
                  {good === selectedGood
                    ? '-'
                    : '+'
                  }
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
