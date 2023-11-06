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
      {!selectedGood
        ? (
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
              style={!selectedGood ? { display: 'none' } : {}}
              onClick={() => (
                setSelectedGood('')
              )}
            />
          </h1>
        )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={selectedGood === good
                ? 'has-background-success-light'
                : ''}
              key={good}
            >
              <td>
                <button
                  data-cy={`${selectedGood === good
                    ? 'AddButton'
                    : 'RemoveButton'}`}
                  type="button"
                  className={`button${selectedGood === good
                    ? ' is-info'
                    : ''}`}
                  onClick={() => {
                    setSelectedGood(selectedGood === good ? '' : good);
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
