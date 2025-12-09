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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectProduct = good => {
    if (good === selectedGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  };

  const clear = () => setSelectedGood('');
  const titleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {selectedGood && (
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
            const isSelected = good === selectedGood;
            const buttonText = isSelected ? '-' : '+';
            const buttonCy = isSelected ? 'RemoveButton' : 'AddButton';
            const buttonClass = isSelected ? 'button is-info' : 'button';

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  <button
                    data-cy={buttonCy}
                    type="button"
                    className={buttonClass}
                    onClick={() => selectProduct(good)}
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
