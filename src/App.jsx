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
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>
      {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          onClick={() => {
            setSelectedGood('');
          }}
          className="delete ml-3"
        />
      )}

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={
                selectedGood === item ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood === item ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    onClick={() => {
                      setSelectedGood('');
                    }}
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => setSelectedGood(item)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
