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

const goodsWithId = goods.map((good, i) => (
  {
    id: i,
    name: good,
  }
));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  const handleClick = (name) => {
    setSelectedGood(name);
  };

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood
          && (
            <button
              onClick={handleClearSelection}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          )
        }

      </h1>
      <table className="table">
        <tbody>
          {goodsWithId.map(good => (
            <tr
              key={good.id}
              data-cy="Good"
              className={
                selectedGood === good.name ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood !== good.name
                  ? (
                    <button
                      onClick={() => handleClick(good.name)}
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  ) : (
                    <button
                      onClick={() => handleClick('')}
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                    >
                      -
                    </button>
                  )
                }
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
