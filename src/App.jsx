import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
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

  const clearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? 'No goods selected' : `${selectedGood} is selected`}
        {selectedGood && (
          <button
            onClick={clearSelection}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;
            const onSelect = setSelectedGood;

            const buttonText = isSelected ? '-' : '+';
            const buttonClass = classNames(isSelected ? 'is-info' : '');
            const buttonCy = isSelected ? 'RemoveButton' : 'AddButton';
            const goodBackground = classNames(
              isSelected ? 'has-background-success-light' : '',
            );

            return (
              <tr data-cy="Good" className={goodBackground} key={good}>
                <td>
                  <button
                    onClick={() => {
                      const value = isSelected ? '' : good;

                      onSelect(value);
                    }}
                    data-cy={buttonCy}
                    type="button"
                    className={`button ${buttonClass}`}
                  >
                    {buttonText}
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
