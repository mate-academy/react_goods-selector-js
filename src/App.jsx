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
        {selectedGood != null ? (
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
          {goods.map(n => (
            <tr
              data-cy="Good"
              className={
                selectedGood === n ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === n ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selectedGood === n ? 'button is-info' : 'button'}
                  onClick={() => setSelectedGood(selectedGood === n ? null : n)}
                >
                  {selectedGood === n ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
