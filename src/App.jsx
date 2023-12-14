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
      {
        good
          ? (
            <h1 className="title is-flex is-align-items-center">
              {`${good} is selected`}

              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => {
                  setGood('');
                }}
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
          {
            goods.map((item) => {
              const selectedGood = item === good;

              return (
                <tr
                  data-cy="Good"
                  className={
                    selectedGood ? 'has-background-success-light' : ''
                    }
                  key={item}
                >
                  <td>
                    {
                      selectedGood
                        ? (
                          <button
                            data-cy="RemoveButton"
                            type="button"
                            className="button is-info"
                            onClick={() => {
                              setGood('');
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
                              setGood(item);
                            }}
                          >
                            +
                          </button>
                        )
                    }
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {item}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </main>
  );
};
