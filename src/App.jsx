import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
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
  const [selectedGood, setGood] = useState('Jam');

  const toggleSelectedGood = (value = '') => {
    setGood(value);
  };

  return (
    <main className="section container">
      {!selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => toggleSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;
            const goodClassName = isSelected
              ? 'has-background-success-light'
              : '';

            const buttonClasses = classNames({
              'button is-info': isSelected,
              button: !isSelected,
            });

            return (
              <tr data-cy="Good" className={goodClassName} key={good}>
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={buttonClasses}
                    onClick={() => toggleSelectedGood(isSelected ? '' : good)}
                  >
                    {isSelected ? '-' : '+'}
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
