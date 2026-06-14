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
  const [selectedGood, setValue] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood === '' ? (
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
            onClick={() => {
              setValue('');
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <React.Fragment key={good}>
              <tr
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      good === selectedGood ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={`button ${selectedGood === good ? 'is-info' : ''}`}
                    onClick={() => {
                      if (good === selectedGood) {
                        setValue('');
                      } else {
                        setValue(good);
                      }
                    }}
                  >
                    {good === selectedGood ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {`${good}`}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </main>
  );
};
