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
  const [message, setMessage] = useState('Jam is selected');

  const handleSelect = good => {
    if (selectedGood === good) {
      setSelectedGood(null);
      setMessage('No goods selected');
    } else {
      setSelectedGood(good);
      setMessage(`${good} is selected`);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setMessage('No goods selected');
              setSelectedGood(null);
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    selectedGood === good ? 'button is-info' : 'button'
                  }
                  onClick={() => handleSelect(good)}
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
