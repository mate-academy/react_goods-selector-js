import cn from 'classnames';
import React, { useState } from 'react';
import 'bulma/css/bulma.css';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClick = (item) => {
    setSelectedGood(item);
  };

  const goods = [
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

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => handleClick(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((goodItem) => {
            const isActive = goodItem === selectedGood;

            return (
              <tr
                key={goodItem}
                data-cy="Good"
                className={cn({
                  'has-background-success-light': isActive,
                })}
              >
                <td>
                  {isActive ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => handleClick(null)}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleClick(goodItem)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodItem}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
