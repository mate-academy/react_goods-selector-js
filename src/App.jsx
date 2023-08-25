import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

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

const DEFAULT_GOOD_VALUE = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(DEFAULT_GOOD_VALUE);

  const handleGoodClick = (good) => {
    setSelectedGood(prevGood => (prevGood === good
      ? ''
      : good
    ));
  };

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
                onClick={() => {
                  setSelectedGood('');
                }}
              />
            </>
          )
          : 'No goods selected'}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoods = (selectedGood === good);

            return (
              <tr
                key={good}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoods,
                })}
              >
                <td>
                  <button
                    data-cy={isGoods
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={cn('button', {
                      'is-info': isGoods,
                    })}
                    onClick={() => handleGoodClick(good)}
                  >
                    {isGoods
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
