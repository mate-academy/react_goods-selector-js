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

export const App = () => {
  const [currentItem, setCurrentItem] = useState('Jam');

  return (
    <main className="section container">
      {
        currentItem
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${currentItem} is selected`}

              <button
                onClick={() => setCurrentItem('')}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </h1>
          )
          : (
            <h1 className="title is-flex is-align-items-center">
              No goods selected
            </h1>
          )
      }

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr data-cy="Good" className={`${currentItem === good ? 'has-background-success-light' : ''}`}>
              <td>
                {
                  currentItem !== good
                    ? (
                      <button
                        onClick={() => setCurrentItem(good)}
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )
                    : (
                      <button
                        onClick={() => setCurrentItem('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )
                }

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
