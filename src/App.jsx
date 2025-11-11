import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

  function handleClick(x) {
    if (selectedGood === x) {
      setSelectedGood('');
    } else {
      setSelectedGood(x);
    }
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood !== '' ? (
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            aria-label="Clear selected goods"
          />
        ) : null}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(x => (
            <tr
              data-cy="Good"
              key={x}
              className={
                selectedGood === x ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === x ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood === x ? 'button is-info' : 'button'}
                  onClick={() => {
                    handleClick(x);
                  }}
                >
                  {selectedGood === x ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
