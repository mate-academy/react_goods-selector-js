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
  const [good, setGood] = useState('Jam');

  return (

    <main className="section container">
      {!good
        ? (
          <h1 className="title is-flex is-align-items-center">
            No goods selected
          </h1>
        )
        : (
          <h1 className="title is-flex is-align-items-center">
            {`${good} is selected`}
            <button
              onClick={
                    () => setGood('')
                    }
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </h1>

        )
      }

      <table className="table">
        <tbody>
          {
            goods.map(go => (
              <tr
                data-cy="Good"
                className={go === good
                  ? 'has-background-success-light'
                  : ''}
              >
                <td>
                  {go === good
                    ? (
                      <button
                        onClick={
                          () => setGood('')}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        onClick={
                          () => setGood(go)
                        }
                        data-cy="AddButton"
                        type="button"
                        className="button"
                      >
                        +
                      </button>
                    )
                  }
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {go}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
