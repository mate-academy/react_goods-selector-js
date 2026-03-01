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
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`}

        {selectedGood && (
          <button
            onClick={() => {
              setGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <button
                    data-cy={isSelected
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    className={`button ${isSelected
                      ? 'is-info'
                      : ''}`}
                    onClick={() => setGood(isSelected
                      ? ''
                      : good)}
                  >
                    {isSelected
                      ? '-'
                      : '+'}
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
