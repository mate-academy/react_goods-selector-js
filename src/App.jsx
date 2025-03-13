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

const RemoveButton = ({ handler }) => (
  <button
    onClick={handler}
    data-cy="RemoveButton"
    type="button"
    className="button is-info"
  >
    -
  </button>
);

const AddButton = ({ handler }) => (
  <button
    onClick={handler}
    data-cy="AddButton"
    type="button"
    className="button"
  >
    +
  </button>
);

export const App = () => {
  const selectDefault = goods.find(good => good === 'Jam') || goods[0];
  const [selectedGood, setSelectedGood] = useState(selectDefault);
  const someSelected = goods.some(good => good === selectedGood);

  const reset = () => setSelectedGood('');

  return (
    <main className="section container">
      {someSelected ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => {
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
                  {isSelected ? (
                    <RemoveButton handler={reset} />
                  ) : (
                    <AddButton handler={() => setSelectedGood(good)} />
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
