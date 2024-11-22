import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';
import { v4 as uuid } from 'uuid';

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

const goodsMap = goods.map(good => {
  return {
    name: good,
    id: uuid(),
  };
});

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  function handleClick(good) {
    setSelectedGood(good.name);
  }

  function removeSelection() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeSelection}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goodsMap.map(good => (
            <tr
              key={good.id}
              data-cy="Good"
              className={cn({
                'has-background-success-light': good.name === selectedGood,
              })}
            >
              <td>
                {good.name === selectedGood ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => removeSelection()}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => handleClick(good)}
                  >
                    +
                  </button>
                )}
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
