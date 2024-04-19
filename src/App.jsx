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
  const clearButton = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood && `${selectedGood} is selected`}
        {selectedGood ? (
          <button
            onClick={clearButton}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              data-cy="Good"
              key={goodName}
              className={
                selectedGood === goodName && 'has-background-success-light'
              }
            >
              <td>
                <button
                  data-cy={
                    selectedGood !== goodName ? 'AddButton' : 'RemoveButton'
                  }
                  type="button"
                  className={`button ${selectedGood === goodName && (selectedGood !== goodName ? 'has-background-success-light' : 'is-info')}`}
                  onClick={
                    selectedGood !== goodName
                      ? () => setSelectedGood(goodName)
                      : clearButton
                  }
                >
                  {selectedGood !== goodName ? '+' : '-'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
