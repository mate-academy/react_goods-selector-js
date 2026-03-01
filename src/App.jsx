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
  const [selectedGood, setSelected] = useState('Jam');

  return (
    <main className="section container">
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelected('')}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={`${
                good === selectedGood ? 'has-background-success-light' : ''
              }`}
            >
              <td>
                <button
                  data-cy={`${
                    good === selectedGood ? 'RemoveButton' : 'AddButton'
                  }`}
                  type="button"
                  className={`${
                    good === selectedGood ? 'button is-info' : 'button'
                  }`}
                  onClick={() => setSelected(good === selectedGood ? '' : good)}
                >
                  {good === selectedGood ? '-' : '+'}
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
