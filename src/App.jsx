import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

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
  const [selectedGoodу, setSelectedGoodу] = useState('Jam');

  const selected = name => {
    if (name === selectedGoodу) {
      setSelectedGoodу('');
    } else {
      setSelectedGoodу(name);
    }
  };

  const clear = () => {
    setSelectedGoodу('');
  };

  const showGoods = (good) => {
    return good ? `${good} is selected` : 'No goods selected'
  }



  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {showGoods(selectedGoodу)}
        {selectedGoodу && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelceted = selectedGoodу === good;
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selectedGoodу === good ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      isSelceted ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      isSelceted ? 'button is-info' : 'button'
                    }
                    onClick={() => {
                      selected(good);
                    }}
                  >
                    {isSelceted ? '-' : '+'}
                  </button>
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
