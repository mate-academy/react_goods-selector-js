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

  const handleReset = () => {
    setSelectedGood('');
  };

  const title = selectedGood
    ? `${selectedGood} is selected`
    : `No goods selected`;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleReset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            let actionButton = null;

            if (isSelected) {
              actionButton = (
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={handleReset}
                >
                  -
                </button>
              );
            } else if (selectedGood === '') {
              actionButton = (
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setSelectedGood(good)}
                >
                  +
                </button>
              );
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>{actionButton}</td>
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
