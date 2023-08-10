import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const changeSelectedChoice = (initialGood) => {
    if (selectedGood === initialGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(initialGood);
    }
  };

  return (
    <main className="section container">
      {!selectedGood
        ? <h1 className="title">No goods selected</h1>
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setSelectedGood('');
              }}
              aria-label="clear"
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(initialGood => (
            <tr
              key={initialGood}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': selectedGood === initialGood,
              })}
            >
              <td>
                <button
                  data-cy={
                    selectedGood === initialGood
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={classNames('button',
                    {
                      'button is-info': selectedGood === initialGood,
                    })}
                  onClick={() => changeSelectedChoice(initialGood)}
                >
                  {
                    selectedGood === initialGood
                      ? '-'
                      : '+'
                  }
                </button>
              </td>
              <td
                data-cy="GoodTitle"
                className="is-vcentered"
              >
                {initialGood}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
