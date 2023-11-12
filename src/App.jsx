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
  const [selectedGood, setSelectedGood] = useState(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}
            {' '}
            <button
              onClick={() => {
                setSelectedGood(null);
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
          {goods.map(
            good => (
              (
                <tr
                  data-cy="Good"
                  key={good}
                  className={
                    selectedGood === good ? 'has-background-success-light' : ''
                  }
                >
                  <td>
                    <button
                      onClick={() => setSelectedGood(selectedGood === good
                        ? null
                        : good)
                      }
                      data-cy={
                        selectedGood === good ? 'RemoveButton' : 'AddButton'
                      }
                      type="button"
                      className={
                        selectedGood === good ? 'button is-info' : 'button'
                      }
                    >
                      {selectedGood === good ? '-' : '+'}
                    </button>
                  </td>

                  <td
                    data-cy="GoodTitle"
                    className="is-vcentered"
                  >
                    {good}
                  </td>
                </tr>
              )
            ),
          )}
        </tbody>
      </table>
    </main>
  );
};
