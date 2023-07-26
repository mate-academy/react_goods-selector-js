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
      {selectedGood === ''
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
              onClick={() => setGood('')}
            />
          </h1>
        )
      }

      <table className="table">
        <tbody>

          {goods.map((good) => {
            const selected = selectedGood === good;

            return (
              <tr
                data-cy="Good"
                className={selected && 'has-background-success-light'}
              >
                <td>
                  <button
                    onClick={() => {
                      if (selected) {
                        setGood('');
                      } else {
                        setGood(good);
                      }
                    }}
                    data-cy={selected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={`button ${selected && 'is-info'}`}
                  >
                    {selected ? '-' : '+'}
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
