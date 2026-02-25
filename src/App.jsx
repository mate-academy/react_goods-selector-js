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

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}
        {selectedGood !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(name => {
            const isSelected = name === selectedGood;
            let control = null;

            if (selectedGood === '') {
              control = (
                <button
                  className="button"
                  type="button"
                  data-cy="AddButton"
                  onClick={() => setSelectedGood(name)}
                >
                  +
                </button>
              );
            } else if (isSelected) {
              control = (
                <button
                  className="button is-info"
                  type="button"
                  data-cy="RemoveButton"
                  onClick={() => setSelectedGood('')}
                >
                  -
                </button>
              );
            }

            return (
              <tr
                key={name}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>{control}</td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
