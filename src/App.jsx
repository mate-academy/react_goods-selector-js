import React, { useState } from 'react';
import './App.scss';

const goodsFromServer = [
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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">
          {selectedGood ? (
            <span
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {selectedGood} is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete is-medium"
                aria-label="clear"
                onClick={() => setSelectedGood('')}
              />
            </span>
          ) : (
            'No goods selected'
          )}
        </h1>

        <table className="table is-narrow">
          <tbody>
            {goodsFromServer.map(good => {
              const isSelected = selectedGood === good;

              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={isSelected ? 'has-background-success-light' : ''}
                >
                  <td>
                    {isSelected ? (
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info is-small"
                        onClick={() => setSelectedGood('')}
                      >
                        -
                      </button>
                    ) : (
                      /* Вимога №9: Кнопка Add з'являється ТІЛЬКИ якщо НІЧОГО не вибрано взагалі */
                      !selectedGood && (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button is-small"
                          onClick={() => setSelectedGood(good)}
                        >
                          +
                        </button>
                      )
                    )}
                  </td>
                  <td data-cy="GoodTitle" style={{ verticalAlign: 'middle' }}>
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
