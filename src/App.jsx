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

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  const clearState = () => {
    setGood('');
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
            onClick={clearState}
          />
        </h1>
      )
      }

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelected = selectedGood === good;
            const goodClassName = isSelected
              ? 'has-background-success-light'
              : '';

            const buttonClassName = isSelected ? 'button is-info' : 'button';
            const buttonTextContent = isSelected ? '-' : '+';
            const buttonDataCy = isSelected ? 'RemoveButton' : 'AddButton';

            const addButton = () => (
              isSelected ? clearState() : setGood(good)
            );

            return (
              <tr data-cy="Good" className={goodClassName} key={good}>
                <td>
                  <button
                    data-cy={buttonDataCy}
                    type="button"
                    className={buttonClassName}
                    onClick={addButton}
                  >
                    {buttonTextContent}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })
          }
        </tbody>
      </table>
    </main>
  );
};
