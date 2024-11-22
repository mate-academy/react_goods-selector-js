import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [good, setGood] = useState('Jam');

  function deleteGood() {
    setGood(false);
  }

  return (
    <main className="section container">
      {good ? (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={deleteGood}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(goodFromArr => (
            <tr
              key={goodFromArr}
              data-cy="Good"
              className={classNames({
                'has-background-success-light': goodFromArr === good,
              })}
            >
              <td>
                {goodFromArr === good ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={deleteGood}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setGood(goodFromArr);
                    }}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodFromArr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
