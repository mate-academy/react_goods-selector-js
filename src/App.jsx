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
  const startIndex = goods.findIndex(products => products === 'Jam');
  const [activeRow, setActiveRow] = useState(startIndex);
  const [selectedGood, setGood] = useState('Jam');

  const [title, setTitle] = useState(false);

  const RemoveButton = () => {
    setGood(null);
    setActiveRow(null);
    setTitle(true);
  };

  return (
    <main className="section container">
      {title ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              RemoveButton();
            }}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              data-cy="Good"
              className={
                index === activeRow ? 'has-background-success-light' : ''
              }
            >
              <td>
                {index === activeRow ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={() => {
                      RemoveButton();
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setTitle(false);
                      setActiveRow(index);
                      setGood(good);
                    }}
                  >
                    +
                  </button>
                )}
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
