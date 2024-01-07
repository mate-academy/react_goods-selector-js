import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const goodsList = [
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
  const [selectedGoods, setSelectedGoods] = useState('Jam');

  function isSelected(good) {
    return selectedGoods.includes(good);
  }

  function AddButton(good) {
    setSelectedGoods([good]);
  }

  function ClearButton(good) {
    setSelectedGoods(selectedGoods
      .filter(selectedGood => selectedGood !== good));
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods.length === 0 ? (
          'No goods selected'
        ) : (
          <>
            {`${selectedGoods} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGoods('')}
            />
          </>
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsList.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': isSelected(good),
              })}
            >
              <td>
                {isSelected(good) ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => ClearButton(good)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => AddButton(good)}
                  >
                    +
                  </button>
                )}
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
