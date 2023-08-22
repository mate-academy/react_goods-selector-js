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
  const activeGoodClass = 'has-background-success-light';
  const [selectedGood, setSelectedGood] = useState('Jam');

  const onAddHandler = good => setSelectedGood(good);
  const onClearHandler = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {
          !selectedGood.length
            ? (
              'No goods selected'
            )
            : (
              <>
                {`${selectedGood} is selected`}

                <button
                  data-cy="ClearButton"
                  type="button"
                  className="delete ml-3"
                  onClick={onClearHandler}
                />
              </>
            )
        }
      </h1>

      <table className="table">
        <tbody>
          {
            goods.map(good => (
              <tr
                data-cy="Good"
                key={good}
                className={good === selectedGood ? activeGoodClass : ''}
              >
                <td>
                  {
                    good === selectedGood
                      ? (
                        <button
                          data-cy="RemoveButton"
                          type="button"
                          className="button is-info"
                          onClick={onClearHandler}
                        >
                          -
                        </button>
                      )
                      : (
                        <button
                          data-cy="AddButton"
                          type="button"
                          className="button"
                          onClick={() => onAddHandler(good)}
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
            ))
          }
        </tbody>
      </table>
    </main>
  );
};
