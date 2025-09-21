import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
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
  const clearSelection = () => {
    setGood('');
  };

  const handleSelectGood = item => {
    if (selectedGood === item) {
      clearSelection();
    } else {
      setGood(item);
    }
  };

  return (
    <main className="section container">
      {selectedGood === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearSelection}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              data-cy="Good"
              key={g}
              className={
                selectedGood === g ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === g ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood === g ? 'button is-info' : 'button'}
                  onClick={() => handleSelectGood(g)}
                >
                  {selectedGood === g ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {g}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
