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
  const DEFAULT_SELECTED_GOOD = 'Jam';
  const [selectedGood, setSelectedGood] = useState(DEFAULT_SELECTED_GOOD);

  return (
    <main className="section container">
      {selectedGood === '' && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          <span>{selectedGood} is selected</span>
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              className={
                selectedGood === good ? 'has-background-success-light' : ''
              }
              key={good}
              data-cy="Good"
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${good === selectedGood ? 'is-info' : ''}`}
                  onClick={() => {
                    setSelectedGood(good === selectedGood ? '' : good);
                  }}
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
