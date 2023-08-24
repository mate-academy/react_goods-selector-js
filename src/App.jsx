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

const defaultSelectedGood = 'Jam';
const emptySelectedGood = '';
const noGoodsSelectedMessage = 'No goods selected';
const selectedBackgroundClass = 'has-background-success-light';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(defaultSelectedGood);
  const isSelectedGoodText = `${selectedGood} is selected`;

  const handleSelectedGood = (good) => {
    setSelectedGood(good);
  };

  const handleClearSelection = () => {
    setSelectedGood(emptySelectedGood);
  };

  const isGoodSelected = selectedGood !== emptySelectedGood;

  const clearButton = (
    <button
      data-cy="ClearButton"
      type="button"
      className="delete ml-3"
      onClick={handleClearSelection}
    />
  );

  const addButton = good => (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => handleSelectedGood(good)}
    >
      +
    </button>
  );

  const removeButton = (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={handleClearSelection}
    >
      -
    </button>
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? isSelectedGoodText
          : noGoodsSelectedMessage
        }

        {isGoodSelected && clearButton}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isSelected
                    ? selectedBackgroundClass
                    : emptySelectedGood
                }
              >
                <td>
                  {isGoodSelected && isSelected
                    ? removeButton
                    : addButton(good)
                  }
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
