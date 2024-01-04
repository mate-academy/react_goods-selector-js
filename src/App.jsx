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

const START_SELECTED_GOOD = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(START_SELECTED_GOOD);

  const selectGood = (name) => {
    const callback = () => setSelectedGood(name);

    return callback;
  };

  const unSelectGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">

      { selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={unSelectGood}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
      }

      <table className="table">
        <tbody>
          {
            goods.map(
              (good) => {
                const isSelected = good === selectedGood;

                let button = (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={selectGood(good)}
                  >
                    +
                  </button>
                );

                if (isSelected) {
                  button = (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={unSelectGood}
                    >
                      -
                    </button>
                  );
                }

                return (
                  <tr
                    data-cy="Good"
                    className={
                      cn({ 'has-background-success-light': isSelected })
                    }
                  >
                    <td>
                      { button }
                    </td>

                    <td data-cy="GoodTitle" className="is-vcentered">
                      { good }
                    </td>
                  </tr>
                );
              },
            )
          }
        </tbody>
      </table>
    </main>
  );
};
