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
    <div>
      <h1 className="title">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
              data-cy="Good"
            >
              <td data-cy="GoodTitle">{good}</td>
              <td>
                {selectedGood === good ? (
                  <button
                    type="button"
                    onClick={() => setSelectedGood('')}
                    data-cy="RemoveButton"
                    className="is-info"
                  >
                    -
                  </button>
                ) : (
                  selectedGood !== good && (
                    <button
                      type="button"
                      onClick={() => setSelectedGood(good)}
                      data-cy="AddButton"
                    >
                      +
                    </button>
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedGood && (
        <button
          type="button"
          onClick={() => setSelectedGood('')}
          data-cy="ClearButton"
        >
          ClearButton
        </button>
      )}
    </div>
  );
};
