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

  function isGoodSelected(good) {
    return selectedGood === good;
  }

  function handleGoodSelected(good) {
    if (isGoodSelected(good)) {
      setSelectedGood('');
    } else {
      setSelectedGood(good);
    }
  }

  return (
    <main className="section container">
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                isGoodSelected(good) ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={isGoodSelected(good) ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={isGoodSelected(good) ? 'button is-info' : 'button'}
                  onClick={() => handleGoodSelected(good)}
                >
                  {isGoodSelected(good) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
