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
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <h1 className="title is-flex is-align-items-center">
        <tr className="has-background-success-light">
          {selectedGood}
        </tr>
        {selectedGood && (
          <button
            onClick={() => setSelectedGood('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good">
              <td>
                <button
                  onClick={() => setSelectedGood(selectedGood ? good : '')}
                  data-cy="AddButton"
                  type="button"
                  className={selectedGood === good
                    ? 'button is-info'
                    : 'button'}
                >
                  {selectedGood === good ? '-' : '+'}
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
