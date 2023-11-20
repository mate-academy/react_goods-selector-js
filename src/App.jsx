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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  return (
    <main className="section container">
      {!selectedGood
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}

            <button
              onClick={() => {
                setSelectedGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={good === selectedGood
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedGood(good === selectedGood ? '' : good);
                  }}
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={good === selectedGood
                    ? 'button is-info'
                    : 'button'
                  }
                >
                  {good === selectedGood ? '-' : '+'}
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
