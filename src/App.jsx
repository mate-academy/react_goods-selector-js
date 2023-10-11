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
        {selectedGood
          ? `${selectedGood} is selected`
          : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            onClick={() => setSelectedGood('')}
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((goodName) => {
            const isSelectedGood = selectedGood === goodName;

            return (
              <tr
                data-cy="Good"
                className={isSelectedGood
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  <div>
                    <button
                      onClick={() => {
                        if (isSelectedGood) {
                          setSelectedGood('');
                        } else {
                          setSelectedGood(goodName);
                        }
                      }}
                      data-cy={isSelectedGood
                        ? 'RemoveButton'
                        : 'AddButton'}
                      type="button"
                      className={isSelectedGood
                        ? 'button is-info'
                        : 'button'}
                    >
                      {isSelectedGood ? '-' : '+'}
                    </button>
                  </div>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {goodName}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
