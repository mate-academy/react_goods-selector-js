import cn from 'classnames';
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
  const [seletredGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {seletredGood !== null ? (
        <h1 className="title is-flex is-align-items-center">
          {`${seletredGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                className={
                  cn({ 'has-background-success-light': seletredGood === good })
                }
              >
                {
                  seletredGood === good ? (
                    <td>
                      <button
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                        onClick={() => setSelectedGood(null)}
                      >
                        -
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                    </td>
                  )
                }

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
