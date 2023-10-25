import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classnames from 'classnames';

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
  const [selectedGood, setSelectedGood] = useState('Jam');

  const isGoodSelected = good => good === selectedGood;

  return (
    <main className="section container">

      {!selectedGood.length ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            onClick={() => {
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3 RemoveButton"
          />
        </h1>
      )}

      <table className="table">
        {goods.map(good => (
          <tbody key={good}>
            <tr
              data-cy="Good"
              className={classnames({
                'has-background-success-light': isGoodSelected(good),
              })}
            >
              <td>
                {isGoodSelected(good) ? (
                  <button
                    onClick={() => {
                      setSelectedGood('');
                    }}
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                  >
                    -
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedGood(good);
                    }}
                    data-cy="AddButton"
                    type="button"
                    className="button"
                  >
                    +
                  </button>
                )}
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
};
