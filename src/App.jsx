import React, { useState } from 'react';
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

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : `No goods selected`}

        {selectedGood && (
        <button
          onClick={() => (
            setSelectedGood('')
          )}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={selectedGood === good && `has-background-success-light`}
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedGood(selectedGood === good ? '' : good);
                  }}
                  data-cy={selectedGood === good ? `RemoveButton` : 'AddButton'}
                  type="button"
                  className={selectedGood === good ? `button is-info` : 'button'}
                >
                  {selectedGood === good ? `-` : '+'}
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
