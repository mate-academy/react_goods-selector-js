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

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleButtonClick = (event) => {
    setSelectedGood(event.target.value);
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            value={null}
            onClick={handleButtonClick}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isGoodSelected,
                })}
              >
                <td>
                  {isGoodSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      value={null}
                      onClick={handleButtonClick}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      value={good}
                      onClick={handleButtonClick}
                    >
                      +
                    </button>
                  )}
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
