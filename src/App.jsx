import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

const goods = [
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
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        {selectedGood && (
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
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  type="button"
                  className={`button ${selectedGood === good
                    ? 'is-info'
                    : ''}`}
                  onClick={() => setSelectedGood(selectedGood === good
                    ? '' : good)}
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
