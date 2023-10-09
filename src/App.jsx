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

const prepareGoods = goods.map((good, index) => ({
  name: good,
  id: index + 1,
}));

export const App = () => {
  const [currentGood, setCurrentGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {currentGood
          ? `${currentGood} is selected`
          : 'No goods selected'
        }

        {currentGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setCurrentGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {prepareGoods.map(good => (
            <tr
              data-cy="Good"
              key={good.id}
              className={good.name === currentGood
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  data-cy={good.name === currentGood
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={good.name === currentGood
                    ? 'button is-info'
                    : 'button'
                  }
                  onClick={good.name === currentGood
                    ? () => setCurrentGood('')
                    : () => setCurrentGood(good.name)
                  }
                >
                  {good.name === currentGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
