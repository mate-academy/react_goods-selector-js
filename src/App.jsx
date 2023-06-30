import 'bulma/css/bulma.css';
import { useState } from 'react';

import './App.scss';

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
  const [value, setValue] = useState('Jam');
  const [isCleared, setCleared] = useState(false);

  const selectValue = (good) => {
    if (good !== value) {
      setValue(good);
      setCleared(false);
    } else {
      setValue(null);
      setCleared(true);
    }
  };

  return (
    <main className="section container">
      {
        isCleared
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${value} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  setCleared(true);
                  setValue(null);
                }}
              />
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                key={good}
                data-cy="Good"
                className={good === value ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={value === good
                      ? 'button is-info'
                      : 'button'
                    }
                    onClick={() => selectValue(good)}
                  >
                    {value === good ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
