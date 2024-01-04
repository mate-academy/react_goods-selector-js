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
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            <button
              onClick={() => {
                setGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isGoodSelected = selectedGood === good;

            const renderButtons = () => (
              <td>
                <button
                  onClick={() => setGood(isGoodSelected ? '' : good)}
                  data-cy={isGoodSelected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${isGoodSelected ? 'is-info' : ''}`}
                >
                  {isGoodSelected ? '-' : '+'}
                </button>
              </td>
            );

            return (
              <tr
                data-cy="Good"
                className={isGoodSelected ? 'has-background-success-light' : ''}
                key={good}
              >
                {renderButtons()}

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
