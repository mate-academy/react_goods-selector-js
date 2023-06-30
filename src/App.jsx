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
        {selectedGood.length > 0 ? (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={() => {
                setSelectedGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : 'No goods selected'
        }

      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''}
            >
              <td>
                <button
                  type="button"
                  data-cy={selectedGood === good
                    ? 'RemoveButton'
                    : 'AddButton'
                  }
                  className={`button ${selectedGood === good ? 'is-info' : ''}`}
                  onClick={() => {
                    if (selectedGood === good) {
                      setSelectedGood('');
                    } else {
                      setSelectedGood(good);
                    }
                  }}
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
