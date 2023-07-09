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
        {
          selectedGood === ''
            ? (
              'No goods selected'
            )
            : (
              <>
                { `${selectedGood} is selected` }

                <button
                  onClick={() => {
                    setGood('');
                  }}
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                />
              </>
            )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <tr
              data-cy="Good"
              className={`${selectedGood === good && 'has-background-success-light'}`}
              key={good}
            >
              <td>
                <button
                  onClick={() => {
                    setGood(good);
                  }}
                  data-cy="AddButton"
                  type="button"
                  className={`button ${selectedGood === good && 'is-info'}`}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
