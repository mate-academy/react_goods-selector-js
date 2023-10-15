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

  const click = (good) => {
    setSelectedGood(good);
  };

  return (
    <main className="section container">
      {
        !selectedGood
          ? (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              {`${selectedGood} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => click('')}
              />
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {
            goods.map(unit => (
              <tr
                data-cy="Good"
                className={
                  unit === selectedGood
                    ? 'has-background-success-light'
                    : ''
                }
              >

                {
                  unit !== selectedGood
                    ? (
                      <td>
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => click(unit)}
                        >
                          +
                        </button>
                      </td>
                    )
                    : (
                      <td>
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={() => click('')}
                        >
                          -
                        </button>
                      </td>
                    )
                }

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
                  {unit}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};
