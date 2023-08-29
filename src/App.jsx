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
const noGoodsSelectedMessage = 'No goods selected';
const selectedBackgroundClass = 'has-background-success-light';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(defaultSelectedGood);

  const handleToggleSelection = (good) => {
    setSelectedGood(selectedGood === good ? '' : good);
  };

  const isGoodSelected = selectedGood !== '';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {isGoodSelected
          ? `${selectedGood} is selected`
          : noGoodsSelectedMessage
        }

        {isGoodSelected && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good
                  ? selectedBackgroundClass
                  : ''
              }
            >
              <td>
                <button
                  data-cy={isGoodSelected && selectedGood === good
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={`button ${isGoodSelected && selectedGood === good
                    ? 'is-info'
                    : ''}`
                  }
                  onClick={() => handleToggleSelection(good)}
                >
                  {isGoodSelected && selectedGood === good
                    ? '-'
                    : '+'
                  }
                </button>
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
