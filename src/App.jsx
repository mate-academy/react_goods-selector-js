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
  const [selectedIndex, setSelectedIndex] = useState(goods.indexOf('Jam'));

  return (
    <main className="section container">
      {selectedIndex !== null ? (
        <h1 className="title is-flex is-align-items-center">
          {goods[selectedIndex]} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedIndex(null);
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            return (
              <tr
                data-cy="Good"
                className={
                  index === selectedIndex ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      index === selectedIndex ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      index === selectedIndex ? 'button is-info' : 'button'
                    }
                    onClick={() => {
                      setSelectedIndex(index === selectedIndex ? null : index);
                    }}
                  >
                    {index === selectedIndex ? '-' : '+'}
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
