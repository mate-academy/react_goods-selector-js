import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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

const PREPARED_GOODS = goods.map((good, index) => ({ good, id: index + 1 }));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

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
          : 'No goods selected'
        }
      </h1>

      <table className="table">
        <tbody>
          {PREPARED_GOODS.map(({ good, id }) => {
            const isSelectedProduct = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={id}
                className={
                  cn({ 'has-background-success-light': isSelectedProduct })
                }
              >
                <td>
                  <button
                    data-cy={isSelectedProduct
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={
                      cn('button', { 'is-info': isSelectedProduct })
                    }
                    onClick={() => (isSelectedProduct
                      ? setSelectedGood('')
                      : setSelectedGood(good)
                    )}
                  >
                    {isSelectedProduct
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
