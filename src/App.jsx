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
  const [selectedGood, setselectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood !== '' && (
          <button
            type="button"
            data-cy="ClearButton"
            className="delete ml-3"
            onClick={() => setselectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isCurrentSelected = selectedGood === good;
            

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  isCurrentSelected ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    type="button"
                    className={`button ${isCurrentSelected ? 'is-info' : ''}`}
                    data-cy={isCurrentSelected ? 'RemoveButton' : 'AddButton'}
                    onClick={() => {
                      setselectedGood(isCurrentSelected ? '' : good);
                    }}
                  >
                    {isCurrentSelected ? '-' : '+'}
                  </button>
                </td>
                <td className="is-vcentered" data-cy="GoodTitle">
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
