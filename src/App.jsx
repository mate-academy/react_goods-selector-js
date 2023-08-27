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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const preparedGoods = goods.map((good, index) => ({ good, id: index }
  ));

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
          {preparedGoods.map(({ good, id }) => {
            const selectedProduct = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                key={id}
                className={
                  cn({ 'has-background-success-light': selectedProduct })
                }
              >
                <td>
                  <button
                    data-cy={selectedProduct
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    type="button"
                    className={
                      cn('button', { 'is-info': selectedProduct })
                    }
                    onClick={() => (selectedProduct
                      ? setSelectedGood('')
                      : setSelectedGood(good)
                    )}
                  >
                    {selectedProduct
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
