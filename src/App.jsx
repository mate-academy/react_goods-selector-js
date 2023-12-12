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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  function isGoodSelected(good) {
    return good === selectedGood;
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          `No goods selected`
        ) : (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = isGoodSelected(good);

            return (
              <tr
                data-cy="Good"
                className={isSelected
                  ? 'has-background-success-light'
                  : ''}
                key={good.slice(0, 3)}
              >
                <td>
                  <button
                    data-cy={isSelected
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={isSelected
                      ? 'button is-info'
                      : 'button'}
                    onClick={() => setSelectedGood(isSelected ? '' : good)}
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
