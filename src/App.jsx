import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

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
  const [selectedGood, setGood] = useState('Jam');

  const click = (good) => {
    if (selectedGood === good) {
      setGood(null);
    } else {
      setGood(good);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? (
          <p>No goods selected</p>
        ) : (
          <div className="title is-flex is-align-items-center">
            <p>{`${selectedGood} is selected`}</p>
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setGood(null);
              }}
            />
          </div>
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={selectedGood
                === good ? 'has-background-success-light' : ''}
              onClick={() => click(good)}
            >
              <td>
                <button
                  data-cy={selectedGood
                    === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood
                    === good ? 'button is-info' : 'button'}
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
