import 'bulma/css/bulma.css';
import cn from 'classnames';
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

const noGoodsSelected = 'No goods selected';

const checkSelected = (good, goodValue) => goodValue === good;

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(`Jam`);

  const addGoodButton = good => (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => {
        setSelectedGood(good);
      }}
    >
      +
    </button>
  );

  const removeAddButton = (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={() => {
        setSelectedGood('');
      }}
    >
      -
    </button>
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? `${selectedGood} is selected`
          : noGoodsSelected
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                cn({ 'has-background-success-light':
                  checkSelected(good, selectedGood) })
              }
            >
              <td>
                {!checkSelected(good, selectedGood)
                  ? addGoodButton(good)
                  : removeAddButton}
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
