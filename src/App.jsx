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
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood(null)}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            const isValueEqual = good === selectedGood;
            const uniqueKey = `${index}-${good}`;

            return (
              <tr
                data-cy="Good"
                className={isValueEqual ? 'has-background-success-light' : ''}
                key={uniqueKey}
              >
                <td>
                  <button
                    data-cy={isValueEqual ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${isValueEqual && 'is-info'}`}
                    onClick={() => setSelectedGood(!isValueEqual ? good : null)}
                  >
                    {isValueEqual ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
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
