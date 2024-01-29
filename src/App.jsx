import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import cn from 'classnames';

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
  const [selectedGood, setSelectedGood]
    = useState('Jam');

  function chooseHeader() {
    return selectedGood ? `${selectedGood} is selected` : 'No goods selected';
  }

  function handleButton(good) {
    setSelectedGood(prevSelected => (prevSelected === good ? '' : good));
  }

  function handleClearButtonClick() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {chooseHeader()}

        {selectedGood && (
          <button
            onClick={() => handleClearButtonClick()}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = good === selectedGood;

            handleButton(good);

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn(
                  { 'has-background-success-light': isSelected },
                )}
              >
                <td>
                  <button
                    onClick={handleButton}
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={isSelected ? 'button is-info' : 'button'
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
