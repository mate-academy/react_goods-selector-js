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
  const [selectedGood, setGood] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {!selectedGood && 'Nothing is selected'}
      </h1>

      <h1 className="title is-flex is-align-items-center">
        {selectedGood}

        {selectedGood && <button
          onClick={() => setGood('')}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={good === selectedGood
                ? 'has-background-success-light'
                : ''
              }
              data-cy="Good"
            >
              <td>
                {!selectedGood && <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => setGood(`${good} is selected`)}
                >
                  +
                </button>}
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
