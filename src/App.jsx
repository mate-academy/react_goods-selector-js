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

const defaultSelectedGood = 'Jam';
const noGoodsSelectedMessage = 'No goods selected';
const selectedBackgroundClass = 'has-background-success-light';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(defaultSelectedGood);

  const handleToggleSelection = (good) => {
    setSelectedGood(selectedGood === good ? '' : good);
  };

  return (
    <main className="section container">
      <h1 className={classNames(
        'title',
        'is-flex',
        'is-align-items-center',
      )}
      >
        {selectedGood
          ? `${selectedGood} is selected`
          : noGoodsSelectedMessage
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className={classNames('delete', 'ml-3')}
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={classNames({
                  [selectedBackgroundClass]: isSelectedGood,
                })}
              >
                <td>
                  <button
                    data-cy={isSelectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': isSelectedGood,
                    })}
                    onClick={() => handleToggleSelection(good)}
                  >
                    {isSelectedGood
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
