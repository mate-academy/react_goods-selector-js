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

export const App = () => (
  <main className="section container">
    <Goods />
  </main>
);

function Goods() {
  const [selectedGood, setSelectedGood] = useState('Jam');

  function handleClick(good) {
    setSelectedGood(good);
  }

  function removeClick() {
    setSelectedGood('');
  }

  return (
    <>
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => removeClick()}
          />
        </h1>
      ) : (
        <h1
          className="
          title
          is-flex
          is-align-items-center"
        >
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelested = good === selectedGood;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={isSelested && 'has-background-success-light'}
              >
                <td>
                  {isSelested ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => removeClick()}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleClick(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
