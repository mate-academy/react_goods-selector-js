import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

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

export function App() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const toggleGood = index => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedIndex !== null ? goods[selectedIndex] : 'No goods selected'}
        {selectedIndex !== null && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedIndex(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedIndex === i ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  type="button"
                  className="button"
                  onClick={() => toggleGood(i)}
                >
                  {selectedIndex === i ? '-' : '+'}
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
}
