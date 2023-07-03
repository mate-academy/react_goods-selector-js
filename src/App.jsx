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

const NO_GOODS = 'No goods selected';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const clearGood = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood
          ? (
            <>
              {`${selectedGood} is selected`}
              <button
                onClick={() => clearGood()}
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
              />
            </>
          )
          : NO_GOODS
        }
      </h1>

      <table className="table">
        {goods.map(good => (
          <tbody>
            <tr
              data-cy="Good"
              className={
                classNames(null, {
                  'has-background-success-light': selectedGood === good,
                })
              }
            >
              <td>
                {
                  selectedGood === good
                    ? (
                      <button
                        onClick={() => clearGood()}
                        data-cy="RemoveButton"
                        type="button"
                        className="button is-info"
                      >
                        -
                      </button>
                    )
                    : (
                      <button
                        onClick={() => setSelectedGood(good)}
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
                {good}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </main>
  );
};
